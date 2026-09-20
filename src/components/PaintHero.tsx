"use client";

import { useEffect, useRef } from "react";

const CYCLE_MS = 8000;
const MASK_X = 120;
const MASK_W = 240;

function easeInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function progressBetween(time: number, start: number, end: number) {
  return easeInOut(clamp((time - start) / (end - start)));
}

function lerp(from: number, to: number, t: number) {
  return from + (to - from) * t;
}

type Frame = {
  reveals: [number, number];
  brush: { x: number; y: number; rotate: number; opacity: number };
};

function frameAt(time: number): Frame {
  const hidden = { x: 8, y: 38, rotate: -24, opacity: 0 };

  if (time < 1000) {
    return { reveals: [0, 0], brush: hidden };
  }

  if (time < 2500) {
    const p = progressBetween(time, 1000, 2500);
    return {
      reveals: [p, 0],
      brush: {
        x: lerp(16, 68, p),
        y: lerp(44, 42, p),
        rotate: lerp(-18, 12, p),
        opacity: 1,
      },
    };
  }

  if (time < 2740) {
    const p = progressBetween(time, 2500, 2740);
    return {
      reveals: [1, 0],
      brush: {
        x: 68,
        y: lerp(42, 58, p),
        rotate: lerp(12, 16, p),
        opacity: 1,
      },
    };
  }

  if (time < 4800) {
    const p = progressBetween(time, 2740, 4800);
    return {
      reveals: [1, clamp(p / 0.78)],
      brush: {
        x: lerp(68, 4, p),
        y: lerp(58, 64, p),
        rotate: lerp(14, -22, p),
        opacity: p > 0.82 ? 1 - (p - 0.82) / 0.18 : 1,
      },
    };
  }

  if (time < 7600) {
    return { reveals: [1, 1], brush: { ...hidden, x: 4, y: 66, rotate: -22 } };
  }

  const fade = 1 - progressBetween(time, 7600, 8000);
  return { reveals: [fade, fade], brush: hidden };
}

function HouseWalls({ tone }: { tone: "white" | "red" }) {
  const wall = tone === "white" ? "#ffffff" : "#d64538";
  const wallShade = tone === "white" ? "#f4efe6" : "#c43b2f";
  const stroke = tone === "white" ? "#e4dcd0" : "#a83329";

  return (
    <g>
      <rect x="148" y="180" width="184" height="132" rx="10" fill={wall} stroke={stroke} strokeWidth="3" />
      <rect x="148" y="248" width="184" height="64" fill={wallShade} opacity="0.45" />
    </g>
  );
}

function HouseRoof() {
  return (
    <g>
      <path
        d="M122 182 L240 86 L358 182 Z"
        fill="#1c1c1c"
        stroke="#111111"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M128 180 H352" stroke="#2a2a2a" strokeWidth="8" strokeLinecap="round" />
    </g>
  );
}

function HouseDetails() {
  return (
    <g>
      <rect x="168" y="198" width="40" height="36" rx="6" fill="#c5e4f2" stroke="#e8e0d4" strokeWidth="4" />
      <rect x="272" y="198" width="40" height="36" rx="6" fill="#c5e4f2" stroke="#e8e0d4" strokeWidth="4" />
      <path d="M188 198 V234 M168 216 H208 M292 198 V234 M272 216 H312" stroke="#f7f2ea" strokeWidth="3" />
      <rect x="223" y="252" width="34" height="60" rx="7" fill="#f3e6d2" stroke="#e4d6c0" strokeWidth="3" />
      <circle cx="249" cy="284" r="3" fill="#c9a15b" />
    </g>
  );
}

export function PaintHero() {
  const brushRef = useRef<HTMLImageElement>(null);
  const bandOneRef = useRef<SVGRectElement>(null);
  const bandTwoRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const bands = [bandOneRef.current, bandTwoRef.current];
    const brush = brushRef.current;
    if (!brush || bands.some((band) => !band)) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      bands.forEach((band) => {
        if (!band) {
          return;
        }
        band.setAttribute("x", String(MASK_X));
        band.setAttribute("width", String(MASK_W));
      });
      brush.style.opacity = "0";
      return;
    }

    let frame = 0;
    const started = performance.now();

    function apply(next: Frame) {
      const [one, two] = next.reveals;
      bandOneRef.current?.setAttribute("width", String(MASK_W * one));
      bandTwoRef.current?.setAttribute("x", String(MASK_X + MASK_W * (1 - two)));
      bandTwoRef.current?.setAttribute("width", String(MASK_W * two));

      if (brushRef.current) {
        brushRef.current.style.opacity = String(next.brush.opacity);
        brushRef.current.style.left = `${next.brush.x}%`;
        brushRef.current.style.top = `${next.brush.y}%`;
        brushRef.current.style.transform = `translate(-30%, -20%) rotate(${next.brush.rotate}deg)`;
      }
    }

    function tick(now: number) {
      apply(frameAt((now - started) % CYCLE_MS));
      frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="paint-hero mx-auto w-full max-w-[34rem]">
      <svg
        className="paint-hero-svg"
        viewBox="0 0 520 420"
        role="img"
        aria-label="Illustrated house being painted red by a swinging paintbrush"
      >
        <defs>
          <linearGradient id="paint-sky" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#c7e8f6" />
            <stop offset="100%" stopColor="#eaf6fb" />
          </linearGradient>
          <linearGradient id="paint-grass" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#86c56f" />
            <stop offset="100%" stopColor="#5fa34d" />
          </linearGradient>
          <clipPath id="paint-scene">
            <rect width="520" height="420" rx="28" />
          </clipPath>
          <mask id="paint-reveal" maskUnits="userSpaceOnUse">
            <rect width="520" height="420" fill="black" />
            <rect ref={bandOneRef} x={MASK_X} y="170" width="0" height="96" rx="20" fill="white" />
            <rect ref={bandTwoRef} x={MASK_X + MASK_W} y="228" width="0" height="96" rx="20" fill="white" />
          </mask>
        </defs>

        <g clipPath="url(#paint-scene)">
          <rect width="520" height="420" fill="url(#paint-sky)" />

          <g className="paint-cloud paint-cloud-one" fill="#ffffff">
            <ellipse cx="92" cy="72" rx="34" ry="18" />
            <ellipse cx="118" cy="70" rx="24" ry="16" />
            <ellipse cx="70" cy="76" rx="18" ry="12" />
          </g>
          <g className="paint-cloud paint-cloud-two" fill="#ffffff">
            <ellipse cx="400" cy="64" rx="38" ry="18" />
            <ellipse cx="430" cy="62" rx="22" ry="14" />
            <ellipse cx="376" cy="68" rx="16" ry="11" />
          </g>
          <g className="paint-cloud paint-cloud-three" fill="#ffffff">
            <ellipse cx="250" cy="48" rx="22" ry="12" />
            <ellipse cx="268" cy="50" rx="14" ry="9" />
          </g>

          <ellipse cx="240" cy="328" rx="118" ry="16" fill="#4f8f42" opacity="0.22" />
          <path d="M0 312 C80 292 160 304 260 298 C360 292 430 306 520 294 V420 H0 Z" fill="url(#paint-grass)" />
          <path d="M0 324 C90 308 180 318 270 312 C370 306 440 318 520 308" fill="none" stroke="#74b85f" strokeWidth="6" />

          <ellipse cx="92" cy="318" rx="28" ry="18" fill="#4f9a4a" />
          <ellipse cx="78" cy="308" rx="16" ry="12" fill="#67b05a" />
          <ellipse cx="400" cy="320" rx="32" ry="20" fill="#4f9a4a" />
          <ellipse cx="418" cy="308" rx="18" ry="13" fill="#67b05a" />
          <circle cx="86" cy="300" r="4" fill="#f2a3b5" />
          <circle cx="102" cy="306" r="3.5" fill="#f6d56a" />
          <circle cx="408" cy="298" r="4" fill="#f2a3b5" />
          <circle cx="424" cy="306" r="3.5" fill="#f6d56a" />

          <rect x="58" y="246" width="10" height="70" rx="5" fill="#c48a4a" />
          <circle cx="62" cy="236" r="28" fill="#5aaa4f" />
          <circle cx="42" cy="250" r="16" fill="#6fbe5c" />
          <circle cx="80" cy="248" r="15" fill="#4e9846" />

          <HouseWalls tone="white" />
          <g mask="url(#paint-reveal)">
            <HouseWalls tone="red" />
          </g>
          <HouseRoof />
          <HouseDetails />
        </g>
      </svg>

      <img
        ref={brushRef}
        src="/images/paint-brush.png"
        alt=""
        width={180}
        height={180}
        className="paint-brush"
      />
    </div>
  );
}

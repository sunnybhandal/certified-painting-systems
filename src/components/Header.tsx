"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { EstimateLink } from "@/components/EstimateLink";
import { Logo } from "@/components/Logo";
import { navLinks, site } from "@/lib/site";

const headerPhoneClass =
  "hidden h-10 items-center rounded-full border border-forest bg-white px-4 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-white lg:inline-flex";
const mobilePhoneClass =
  "inline-flex h-12 items-center justify-center rounded-full border border-forest bg-white text-base font-medium text-forest transition-colors hover:bg-forest hover:text-white";

const sectionIds = navLinks
  .filter((link) => link.href.startsWith("/#"))
  .map((link) => link.href.slice(2));

function linkKey(href: string) {
  return href.startsWith("/#") ? href.slice(2) : href.replace(/^\//, "");
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const headerRef = useRef<HTMLElement>(null);
  const lockedRef = useRef<string | null>(null);
  const unlockTimer = useRef<number>(0);

  function activateLink(key: string) {
    setActive(key);
    lockedRef.current = key;
    window.clearTimeout(unlockTimer.current);
    unlockTimer.current = window.setTimeout(() => {
      lockedRef.current = null;
    }, 900);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setOpen(false));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/commercial") {
      const frame = requestAnimationFrame(() => setActive("commercial"));
      return () => cancelAnimationFrame(frame);
    }

    if (pathname !== "/") {
      const frame = requestAnimationFrame(() => setActive(""));
      return () => cancelAnimationFrame(frame);
    }

    function updateActive() {
      if (lockedRef.current) {
        return;
      }

      const headerHeight = headerRef.current?.offsetHeight ?? 80;
      const probe = headerHeight + 24;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) {
          continue;
        }
        if (el.getBoundingClientRect().top <= probe) {
          current = id;
        }
      }

      setActive(current);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("hashchange", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("hashchange", updateActive);
    };
  }, [pathname]);

  function onNavClick(href: string, event: MouseEvent<HTMLAnchorElement>) {
    activateLink(linkKey(href));
    setOpen(false);
    if (pathname !== "/" || !href.startsWith("/#")) {
      return;
    }

    const el = document.getElementById(href.slice(2));
    if (!el) {
      return;
    }

    event.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b border-line/80 bg-white/90 backdrop-blur-md transition-shadow ${
        scrolled && !open ? "shadow-[0_2px_10px_rgba(23,20,17,0.08)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          aria-label="Certified Painting Systems home"
          onClick={(event) => {
            setOpen(false);
            setActive("");
            if (pathname === "/") {
              event.preventDefault();
              window.history.replaceState(null, "", "/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === linkKey(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={(event) => onNavClick(link.href, event)}
                className={`relative pb-0.5 text-[15px] font-medium transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-forest after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 ${
                  isActive ? "text-forest after:scale-x-100" : "text-stone hover:text-forest"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <EstimateLink className="hidden h-10 cursor-pointer items-center rounded-full border border-forest bg-forest px-4 text-sm font-medium text-white transition-colors hover:bg-white hover:text-forest lg:inline-flex">
            Free Estimate
          </EstimateLink>
          <a href={site.phoneHref} className={headerPhoneClass}>
            {site.phone}
          </a>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-[21px] w-8">
              <span
                className={`absolute top-0 left-0 h-[3px] w-8 rounded-full bg-current transition-transform duration-300 ease-in-out ${
                  open ? "translate-y-[9px] rotate-45" : "translate-y-0 rotate-0"
                }`}
              />
              <span
                className={`absolute top-[9px] left-0 h-[3px] w-8 rounded-full bg-current transition-[opacity,transform] duration-300 ease-in-out ${
                  open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                className={`absolute top-[18px] left-0 h-[3px] w-8 rounded-full bg-current transition-transform duration-300 ease-in-out ${
                  open ? "-translate-y-[9px] -rotate-45" : "translate-y-0 rotate-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`absolute top-full right-0 left-0 z-50 grid overflow-hidden bg-cream shadow-[0_16px_32px_rgba(23,20,17,0.12)] transition-[grid-template-rows] duration-[350ms] ease-out lg:hidden ${
          open ? "grid-rows-[1fr] border-t border-line" : "pointer-events-none grid-rows-[0fr] border-t border-transparent"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            className={`flex flex-col gap-1 px-5 py-6 transition-opacity duration-[350ms] ease-out ${
              open ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Mobile"
            aria-hidden={!open}
          >
            {navLinks.map((link) => {
              const isActive = active === linkKey(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(event) => onNavClick(link.href, event)}
                  className={`block w-full rounded-xl px-3 py-3 text-left text-lg font-medium transition-colors ${
                    isActive ? "bg-white text-forest" : "text-ink hover:bg-line"
                  }`}
                  tabIndex={open ? undefined : -1}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-4 flex flex-col gap-3">
              <EstimateLink
                onClick={() => setOpen(false)}
                className="inline-flex h-12 cursor-pointer items-center justify-center rounded-full border border-forest bg-forest text-base font-medium text-white transition-colors hover:bg-white hover:text-forest"
              >
                Free Estimate
              </EstimateLink>
              <a href={site.phoneHref} className={mobilePhoneClass}>
                {site.phone}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

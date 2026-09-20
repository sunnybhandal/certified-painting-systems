"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, type MouseEvent, type ReactNode } from "react";

type EstimateLinkProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const estimateButtonClass =
  "inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full border border-forest bg-forest px-6 text-base font-medium text-white transition-colors hover:bg-white hover:text-forest sm:w-auto";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  window.history.replaceState(null, "", `/#${id}`);
}

export function ScrollToHash() {
  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (!id) {
      return;
    }

    const timeout = window.setTimeout(() => scrollToId(id), 80);
    return () => window.clearTimeout(timeout);
  }, []);

  return null;
}

export function EstimateLink({
  children = "Get a Free Estimate",
  className = estimateButtonClass,
  onClick,
}: EstimateLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.();
    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    scrollToId("estimate");
  }

  return (
    <Link href="/#estimate" onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

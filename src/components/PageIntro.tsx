import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, lede, children }: PageIntroProps) {
  return (
    <header className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 sm:pt-16">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-sage">
        {eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-[3.25rem]">
        {title}
      </h1>
      {lede ? (
        <p className="mt-5 max-w-2xl font-display text-xl leading-snug text-forest sm:text-2xl">
          {lede}
        </p>
      ) : null}
      {children}
    </header>
  );
}

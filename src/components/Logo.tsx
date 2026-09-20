import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Certified Painting Systems Ltd"
      width={520}
      height={160}
      priority
      className={`h-11 w-auto sm:h-14 ${className}`}
    />
  );
}

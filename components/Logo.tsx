import Link from "next/link";
import { Icons } from "./Icons";
import { cn } from "@/lib/utils";

interface LogoProps {
  href: string;
  className?: string;
}

export const Logo = ({ href, className }: LogoProps) => {
  return (
    <Link href={href}>
      <Icons.logo className={cn("w-[100px] h-[100px]", className)} />
    </Link>
  );
};

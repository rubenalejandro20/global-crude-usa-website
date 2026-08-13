import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "ghost-dark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition-all duration-300 rounded-[4px] whitespace-nowrap group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60 disabled:cursor-not-allowed";

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-sm sm:text-base",
};

const variants: Record<Variant, string> = {
  primary: "bg-gold text-navy-deep hover:bg-gold-light shadow-[0_1px_0_rgba(0,0,0,0.05)]",
  secondary: "border border-navy text-navy hover:bg-navy hover:text-white bg-transparent",
  ghost: "border border-white/40 text-white hover:bg-white hover:text-navy-deep bg-transparent",
  "ghost-dark": "border border-navy/25 text-navy hover:border-navy bg-transparent",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
};

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: undefined;
  };

type AsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

export function Button(props: AsButton | AsAnchor) {
  const { as, variant = "primary", size = "md", withArrow, children, className = "", ...rest } = props;
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <Icon
          name="arrow-right"
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (as === "a") {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}

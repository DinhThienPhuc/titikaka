import clsx from "clsx";
import { AnchorHTMLAttributes, ReactNode } from "react";

export interface IButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "contained" | "outlined" | "text" | "inverse";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
}

const ButtonLink = ({
  children,
  href = "#",
  variant = "text",
  leftIcon = null,
  rightIcon = null,
  disabled = false,
  ...props
}: IButtonLinkProps) => {
  return (
    <a
      {...props}
      href={href}
      className={clsx(
        "inline-flex gap-2 font-poly-sans-median font-semibold text-sm items-center rounded-xl border-2 border-transparent",
        variant === "contained" &&
          "bg-neutral-900 text-white border-neutral-900 font-poly-sans-neutral px-4 py-3 font-normal",
        variant === "outlined" &&
          "text-neutral-900 !border-neutral-900 font-poly-sans-neutral px-4 py-3 font-normal",
        variant === "inverse" &&
          "bg-white text-neutral-900 border-transparent font-poly-sans-neutral px-4 py-3 font-normal",
        disabled && "opacity-50 cursor-not-allowed",
        props.className
      )}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </a>
  );
};

export default ButtonLink;

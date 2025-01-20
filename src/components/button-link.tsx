import clsx from "clsx";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface IButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "contained" | "outlined" | "text";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const ButtonLink = ({
  children,
  href = "#",
  variant = "text",
  leftIcon = null,
  rightIcon = null,
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
          "text-neutral-900 !border-neutral-900 font-poly-sans-neutral px-4 py-3 font-normal"
      )}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </a>
  );
};

export default ButtonLink;

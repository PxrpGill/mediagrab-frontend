import cx from "clsx";
import type { PropsWithChildren } from "react";

import css from "./index.module.css";

type ButtonProps = PropsWithChildren & {
  className?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
};

export const ModalButton = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={cx(css.root, className)} {...props}>
      {children}
    </button>
  );
};

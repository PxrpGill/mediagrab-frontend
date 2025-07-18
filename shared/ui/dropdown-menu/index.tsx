"use client";

import cx from "clsx";
import {
  type Ref,
  useState,
  type FC,
  type PropsWithChildren,
  type SVGProps,
} from "react";

import { useOutsideClick } from "@/shared/hooks/use-outside-click";

import css from "./index.module.css";

type DropdownMenuProps = PropsWithChildren & {
  className?: string;
  Icon: FC<SVGProps<SVGElement>>;
  iconClassName?: string;
  withIconRotation?: boolean;
};

export const DropdownMenu = ({
  className,
  children,
  Icon,
  iconClassName,
  withIconRotation,
}: DropdownMenuProps) => {
  const [isOpen, toggleOpen] = useState<boolean>(false);
  const ref = useOutsideClick(() => toggleOpen(false));

  const handleMenuOpen = () => {
    toggleOpen((prev) => !prev!);
  };

  return (
    <div className={cx(css.root, className)} ref={ref as Ref<HTMLDivElement>}>
      <button
        className={css.button}
        onClick={handleMenuOpen}
        type="button"
        data-item="main"
      >
        <Icon
          className={cx(css.icon, iconClassName, {
            [css.withRotation]: isOpen && withIconRotation,
          })}
        />
      </button>
      <menu className={cx(css.menu, { [css.open]: isOpen })}>{children}</menu>
    </div>
  );
};

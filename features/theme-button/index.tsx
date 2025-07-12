"use client";

import cx from "clsx";

import ThemeIcon from "@/public/assets/icons/theme.svg";
import { useTheme } from "@/shared";

import css from "./index.module.css";

type ThemeButtonProps = {
  className?: string;
};

export const ThemeButton = ({ className }: ThemeButtonProps) => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={cx(css.root, className)}>
      <ThemeIcon className={css.icon} />
    </button>
  );
};

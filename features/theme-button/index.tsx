"use client";

import ThemeIcon from "@/public/assets/icons/theme.svg";
import { useTheme } from "@/shared";

import css from "./index.module.css";

export const ThemeButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={css.root}>
      <ThemeIcon className={css.icon} />
    </button>
  );
};

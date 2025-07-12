import { ThemeButton } from "@/features/theme-button";

import css from "./index.module.css";
import { ProjectTitle } from "./project-title";

export const Header = () => {
  return (
    <header className={css.root}>
      <ThemeButton />
      <ProjectTitle className={css.title} />
    </header>
  );
};

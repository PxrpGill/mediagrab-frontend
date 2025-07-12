import { AuthButton } from "@/entities";
import { ThemeButton } from "@/features";

import css from "./index.module.css";
import { ProjectTitle } from "./project-title";

export const Header = () => {
  return (
    <header className={css.root}>
      <ThemeButton />
      <ProjectTitle className={css.title} />
      <AuthButton />
    </header>
  );
};

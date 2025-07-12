import { AuthButton } from "@/entities";
import { ThemeButton } from "@/features";

import css from "./index.module.css";
import { ProjectTitle } from "./project-title";

export const Header = () => {
  return (
    <header className={css.root}>
      <div className={css.wrapper}>
        <ThemeButton className={css.themeButton} />
        <ProjectTitle className={css.title} />
        <AuthButton className={css.authButton} />
      </div>
    </header>
  );
};

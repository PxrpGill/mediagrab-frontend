import cx from "clsx";

import css from "./index.module.css";

type SeparatorProps = {
  className?: string;
};

export const Separator = ({ className }: SeparatorProps) => {
  return (
    <div className={cx(css.root, className)}>
      <div className={css.line} />
      <span className={css.text}>ИЛИ</span>
      <div className={css.line} />
    </div>
  );
};

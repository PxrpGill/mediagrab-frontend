/* eslint-disable @next/next/no-img-element */
import cx from "clsx";

import css from "./index.module.css";

type ImageElementProps = {
  className?: string;
};

export const ImageElement = ({ className }: ImageElementProps) => {
  return (
    <div className={cx(css.root, className)}>
      <img className={css.img} src="123" />
    </div>
  );
};

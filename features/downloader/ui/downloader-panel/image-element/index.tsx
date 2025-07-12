/* eslint-disable @next/next/no-img-element */
import css from "./index.module.css";

export const ImageElement = () => {
  return (
    <div className={css.root}>
      <img className={css.img} src="123" />
    </div>
  );
};

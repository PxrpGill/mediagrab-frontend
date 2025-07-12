import cx from "clsx";

import { ImageElement } from "./image-element";
import css from "./index.module.css";

type DownloaderPanelProps = {
  isClicked: boolean;
};

export const DownloaderPanel = ({ isClicked }: DownloaderPanelProps) => {
  return (
    <section className={cx(css.root, { [css.active]: isClicked })}>
      <ImageElement />
    </section>
  );
};

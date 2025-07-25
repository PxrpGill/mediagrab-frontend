import cx from "clsx";

import { DownloaderForm } from "./downloader-form";
import { ImageElement } from "./image-element";
import css from "./index.module.css";
import { PostName } from "./post-name";

type DownloaderPanelProps = {
  isClicked: boolean;
};

export const DownloaderPanel = ({ isClicked }: DownloaderPanelProps) => {
  return (
    <section className={cx(css.root, { [css.active]: isClicked })}>
      <ImageElement className={css.desktopImage} />
      <div className={css.rightPanel}>
        <PostName
          title="Сколько стоят деньги?"
          author="Хаски"
          className={css.name}
        />
        <ImageElement className={css.mobileImage} />
        <DownloaderForm />
      </div>
    </section>
  );
};

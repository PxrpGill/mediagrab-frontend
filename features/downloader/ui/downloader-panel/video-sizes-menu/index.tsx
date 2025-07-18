import parser from "html-react-parser";

import { VIDEO_SIZES } from "@/features/downloader/models/downloader.constanst";

import css from "./index.module.css";

export const VideoSizesMenu = () => {
  return (
    <ul className={css.root}>
      {VIDEO_SIZES.map((size, index) => (
        <li key={index} className={css.paragraph}>
          <button className={css.button} type="button">
            <span className={css.resolution}>{parser(size.resolution)}</span>
            <span className={css.name}>{parser(size.name)}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

import cx from "clsx";

import { DOWNLOADER_CONSTANTS } from "@/features/downloader/models/downloader.constanst";
import Checkbox from "@/shared/ui/checkbox";

import css from "./index.module.css";

type DownloaderFormProps = {
  className?: string;
};

export const DownloaderForm = ({ className }: DownloaderFormProps) => {
  const { sponsorBlock } = DOWNLOADER_CONSTANTS;

  return (
    <form className={cx(css.root, className)}>
      <div className={css.sponsorBlock}>
        <Checkbox label={sponsorBlock.title} />
      </div>
    </form>
  );
};

import cx from "clsx";
import parser from "html-react-parser";

import { DOWNLOADER_CONSTANTS } from "@/features/downloader/models/downloader.constanst";
import { VideoSizesMenu } from "@/features/downloader/ui/downloader-panel/video-sizes-menu";
import ArrowSVG from "@/public/assets/icons/menu-arrow.svg";
import { DropdownMenu } from "@/shared/ui/dropdown-menu";

import css from "./index.module.css";

type DownloadButtonProps = {
  className?: string;
};

export const DownloadButton = ({ className }: DownloadButtonProps) => {
  const { downloadButton } = DOWNLOADER_CONSTANTS;

  return (
    <div className={cx(css.root, className)}>
      <button className={css.button}>{parser(downloadButton.text)}</button>
      <DropdownMenu
        Icon={ArrowSVG}
        iconClassName={css.icon}
        className={css.dropdown}
        withIconRotation
      >
        <VideoSizesMenu />
      </DropdownMenu>
    </div>
  );
};

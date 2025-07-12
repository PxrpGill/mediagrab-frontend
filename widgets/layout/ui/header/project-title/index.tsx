/* eslint-disable @next/next/no-img-element */
import cx from "clsx";
import parser from "html-react-parser";

import { HEADER_DATA } from "@/widgets/layout/models/header.constants";

import css from "./index.module.css";

type ProjectTitleProps = {
  className?: string;
};

export const ProjectTitle = ({ className }: ProjectTitleProps) => {
  const { projectIcon, projectName } = HEADER_DATA;

  return (
    <div className={cx(css.root, className)}>
      <img className={css.icon} src={projectIcon} draggable={false} />
      <h1 className={css.title}>{parser(projectName)}</h1>
    </div>
  );
};

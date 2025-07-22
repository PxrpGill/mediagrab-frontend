"use client";

import type { MouseEvent } from "react";
import { useState } from "react";

import { DownloaderPanel } from "./downloader-panel";
import css from "./index.module.css";
import { SearchForm } from "./search-form";

export const Downloader = () => {
  const [isClicked, setClicked] = useState<boolean>(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setClicked((prev) => !prev);
  };

  return (
    <section className={css.root}>
      <SearchForm handleClick={handleClick} isClicked={isClicked} />
      <DownloaderPanel isClicked={isClicked} />
    </section>
  );
};

"use client";

import { useState } from "react";

import { DownloaderPanel } from "./downloader-panel";
import css from "./index.module.css";
import { SearchForm } from "./search-form";

export const Downloader = () => {
  const [isClicked, setClicked] = useState<boolean>(false);

  const handleClick = (event: MouseEvent) => {
    event.preventDefault();
    setClicked((prev) => !prev);
  };

  return (
    <section className={css.root}>
      <SearchForm handleClick={handleClick} />
      <DownloaderPanel isClicked={isClicked} />
    </section>
  );
};

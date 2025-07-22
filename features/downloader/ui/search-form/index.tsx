import cx from "clsx";
import type { MouseEvent } from "react";

import { SEARCH_FORM_CONSTANTS } from "@/features/downloader/models/search-form.constants";
// import LoaderIcon from "@/public/assets/icons/loader.svg";
import SearchIcon from "@/public/assets/icons/search.svg";

import css from "./index.module.css";

type SearchFormProps = {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  isClicked: boolean;
};

export const SearchForm = ({ handleClick, isClicked }: SearchFormProps) => {
  const { placeholder } = SEARCH_FORM_CONSTANTS;

  return (
    <form className={cx(css.root, { [css.active]: isClicked })}>
      <input className={css.input} placeholder={placeholder} type="text" />
      <button type="submit" className={css.searchButton} onClick={handleClick}>
        <SearchIcon className={css.searchIcon} />
        {/* <LoaderIcon className={cx(css.searchIcon, css.loader)} /> */}
      </button>
    </form>
  );
};

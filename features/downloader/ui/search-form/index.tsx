"use client";

import { SEARCH_FORM_CONSTANTS } from "@/features/downloader/models/search-form.constants";
import SearchIcon from "@/public/assets/icons/search.svg";

import css from "./index.module.css";

export const SearchForm = () => {
  const { placeholder } = SEARCH_FORM_CONSTANTS;

  return (
    <form className={css.root}>
      <input className={css.input} placeholder={placeholder} type="text" />
      <button type="submit" className={css.searchButton}>
        <SearchIcon className={css.searchIcon} />
      </button>
    </form>
  );
};

import css from "./index.module.css";
import { SearchForm } from "./search-form";

export const Downloader = () => {
  return (
    <section className={css.root}>
      <SearchForm />
    </section>
  );
};

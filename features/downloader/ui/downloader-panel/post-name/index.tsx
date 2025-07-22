import cx from "clsx";
import parser from "html-react-parser";

import css from "./index.module.css";

type PostNameProps = {
  title?: string;
  author?: string;
  className?: string;
};

export const PostName = ({ title, author, className }: PostNameProps) => {
  return (
    <article className={cx(css.root, className)}>
      {title && <h4 className={css.title}>{parser(title)}</h4>}
      {author && <p className={css.author}>{parser(author)}</p>}
    </article>
  );
};

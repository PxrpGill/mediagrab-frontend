import parser from "html-react-parser";

import css from "./index.module.css";

type PostNameProps = {
  title?: string;
  author?: string;
};

export const PostName = ({ title, author }: PostNameProps) => {
  return (
    <article className={css.root}>
      {title && <h4 className={css.title}>{parser(title)}</h4>}
      {author && <p className={css.author}>{parser(author)}</p>}
    </article>
  );
};

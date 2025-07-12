import Link from "next/link";
import parser from "html-react-parser";

import GithubIcon from "@/public/assets/icons/github.svg";
import { FOOTER_CONSTANTS } from "../../models/footer.constants";
import css from "./index.module.css";

export const Footer = () => {
  const { github, vk, youtube } = FOOTER_CONSTANTS;

  return (
    <footer className={css.root}>
      <nav className={css.links}>
        <ul className={css.list}>
          <li className={css.paragraph}>
            <Link href={github.href} target={github.target}>
              <GithubIcon className={css.githubIcon} />
            </Link>
            <Link
              href={github.href}
              className={css.githubLink}
              target={github.target}
            >
              {parser(github.text)}
            </Link>
          </li>
          <li className={css.paragraph}>
            <Link href={vk.href} target={vk.target}>
              <img className={css.vkIcon} src={vk.src} />
            </Link>
          </li>
          <li className={css.paragraph}>
            <Link href={youtube.href} target={youtube.target}>
              <img className={css.youtubeIcon} src={youtube.src} />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

"use client";
import parser from "html-react-parser";
import { AUTH_BUTTON_CONSTANTS } from "@/entities/user/models/auth-button.constants";

import css from "./index.module.css";

export const NoAuthorizedContent = () => {
  const { registration, login, slash } = AUTH_BUTTON_CONSTANTS;

  return (
    <div className={css.root}>
      <button className={css.button}>{parser(registration)}</button>
      <span className={css.slash}>{parser(slash)}</span>
      <button className={css.button}>{parser(login)}</button>
    </div>
  );
};

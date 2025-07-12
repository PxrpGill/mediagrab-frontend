"use client";

import parser from "html-react-parser";

import { AUTH_BUTTON_CONSTANTS } from "@/entities/user/models/auth-button.constants";
import { useLayoutContext } from "@/shared";

import css from "./index.module.css";

export const NoAuthorizedContent = () => {
  const { registration, login, slash } = AUTH_BUTTON_CONSTANTS;
  const { toggleLoginModalOpen, toggleRegistrationModalOpen } =
    useLayoutContext();

  const handleRegistrationClick = () => {
    toggleRegistrationModalOpen((prev) => !prev);
  };

  const handleLoginClick = () => {
    toggleLoginModalOpen((prev) => !prev);
  };

  return (
    <div className={css.root}>
      <button className={css.button} onClick={handleRegistrationClick}>
        {parser(registration)}
      </button>
      <span className={css.slash}>{parser(slash)}</span>
      <button className={css.button} onClick={handleLoginClick}>
        {parser(login)}
      </button>
    </div>
  );
};

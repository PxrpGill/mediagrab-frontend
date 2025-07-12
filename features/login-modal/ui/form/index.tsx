"use client";

import parser from "html-react-parser";

import { useLoginForm } from "@/features/login-modal/hooks/use-login-form";
import { LOGIN_FORM_CONSTANTS } from "@/features/login-modal/model/login-modal.constants";
import { Input } from "@/shared";
import { ModalButton } from "@/shared";

import css from "./index.module.css";

export const LoginForm = () => {
  const { title, submitButton } = LOGIN_FORM_CONSTANTS;
  const { inputs, isValid } = useLoginForm();

  return (
    <div className={css.root}>
      <h3 className={css.title}>{parser(title)}</h3>
      <form className={css.form}>
        {inputs.map((inputProps, index) => (
          <Input {...inputProps} key={index} />
        ))}
        <ModalButton disabled={!isValid} className={css.submitButton}>
          {parser(submitButton)}
        </ModalButton>
      </form>
    </div>
  );
};

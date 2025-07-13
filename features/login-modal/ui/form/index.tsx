"use client";

import parser from "html-react-parser";

import { useLoginForm } from "@/features/login-modal/hooks/use-login-form";
import { useToggleRegister } from "@/features/login-modal/hooks/use-toggle-register";
import { LOGIN_FORM_CONSTANTS } from "@/features/login-modal/model/login-modal.constants";
import { Input } from "@/shared";
import { ModalButton } from "@/shared";
import { Separator } from "@/shared/ui/separator";

import css from "./index.module.css";

export const LoginForm = () => {
  const { title, submitButton, createAccount } = LOGIN_FORM_CONSTANTS;
  const { inputs, isValid } = useLoginForm();
  const { handleRegisterClick } = useToggleRegister();

  return (
    <div className={css.root}>
      <h3 className={css.title}>{parser(title)}</h3>
      <form className={css.form}>
        {inputs.map((inputProps, index) => (
          <Input {...inputProps} key={index} />
        ))}
        <ModalButton
          disabled={!isValid}
          type="submit"
          className={css.submitButton}
        >
          {parser(submitButton)}
        </ModalButton>
      </form>
      <Separator className={css.separator} />
      <ModalButton className={css.registerButton} onClick={handleRegisterClick}>
        {parser(createAccount)}
      </ModalButton>
    </div>
  );
};

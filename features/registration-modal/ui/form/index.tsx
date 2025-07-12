"use client";

import parser from "html-react-parser";

import { useRegistrationForm } from "@/features/registration-modal/hooks/use-registration-form";
import { REGISTRATION_CONSTANTS } from "@/features/registration-modal/model/registration.constants";
import { ModalButton, Input } from "@/shared";

import css from "./index.module.css";

export const RegistrationForm = () => {
  const { title, submitButton } = REGISTRATION_CONSTANTS;
  const { inputs, isValid } = useRegistrationForm();

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

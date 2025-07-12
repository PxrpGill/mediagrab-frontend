"use client";
import { useCallback } from "react";

import { useLayoutContext } from "@/shared";
import { Modal } from "@/shared/ui/modal";

import { RegistrationForm } from "./form";
import css from "./index.module.css";

export const RegistrationModal = () => {
  const { isRegistrationModalOpen, toggleRegistrationModalOpen } =
    useLayoutContext();

  const handleClose = useCallback(() => {
    toggleRegistrationModalOpen(false);
  }, [toggleRegistrationModalOpen]);

  return (
    <Modal
      isOpen={isRegistrationModalOpen}
      toggleClose={handleClose}
      className={css.root}
    >
      <RegistrationForm />
    </Modal>
  );
};

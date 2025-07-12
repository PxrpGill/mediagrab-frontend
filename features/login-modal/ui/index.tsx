"use client";

import { useCallback } from "react";

import { useLayoutContext } from "@/shared";
import { Modal } from "@/shared/ui/modal";

import { LoginForm } from "./form";

export const LoginModal = () => {
  const { isLoginModalOpen, toggleLoginModalOpen } = useLayoutContext();

  const handleClose = useCallback(() => {
    toggleLoginModalOpen(false);
  }, [toggleLoginModalOpen]);

  return (
    <Modal isOpen={isLoginModalOpen} toggleClose={handleClose}>
      <LoginForm />
    </Modal>
  );
};

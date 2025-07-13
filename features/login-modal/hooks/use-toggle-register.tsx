import { useCallback } from "react";

import { useLayoutContext } from "@/shared";

export const useToggleRegister = () => {
  const { toggleRegistrationModalOpen, toggleLoginModalOpen } =
    useLayoutContext();

  const handleRegisterClick = useCallback(() => {
    toggleLoginModalOpen(false);
    toggleRegistrationModalOpen(true);
  }, [toggleLoginModalOpen, toggleRegistrationModalOpen]);

  return { handleRegisterClick };
};

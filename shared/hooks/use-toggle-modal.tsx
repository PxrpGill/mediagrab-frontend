import { useRef, useEffect } from "react";

type UseToggleModalProps = {
  isOpen?: boolean;
};

export const useToggleModal = ({ isOpen }: UseToggleModalProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const currentRef = modalRef.current;

    if (isOpen) {
      currentRef?.showModal();
    } else {
      currentRef?.close();
    }
  }, [isOpen]);

  return {
    modalRef,
  };
};

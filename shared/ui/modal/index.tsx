"use client";

import cx from "clsx";
import type { PropsWithChildren } from "react";

import CrossSVG from "@/public/assets/icons/cross.svg";
import { useToggleModal } from "@/shared/hooks/use-toggle-modal";

import css from "./index.module.css";

type ModalProps = PropsWithChildren & {
  className?: string;
  isOpen: boolean;
  toggleClose: () => void;
};

export const Modal = ({
  className,
  isOpen,
  toggleClose,
  children,
}: ModalProps) => {
  const { modalRef } = useToggleModal({ isOpen });

  return (
    <dialog
      ref={modalRef}
      className={cx(css.root, className, { [css.active]: isOpen })}
    >
      <button className={css.closeButton} onClick={toggleClose}>
        <CrossSVG className={css.cross} />
      </button>
      {children}
    </dialog>
  );
};

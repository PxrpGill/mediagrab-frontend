"use client";

import type { Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useContext, useState } from "react";

type LayoutContextProps = {
  isLoginModalOpen: boolean;
  toggleLoginModalOpen: Dispatch<SetStateAction<boolean>>;

  isRegistrationModalOpen: boolean;
  toggleRegistrationModalOpen: Dispatch<SetStateAction<boolean>>;
};

const LayoutContext = createContext<LayoutContextProps | null>(null);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [isLoginModalOpen, toggleLoginModalOpen] = useState<boolean>(false);
  const [isRegistrationModalOpen, toggleRegistrationModalOpen] =
    useState<boolean>(false);

  return (
    <LayoutContext.Provider
      value={{
        isLoginModalOpen,
        isRegistrationModalOpen,
        toggleLoginModalOpen,
        toggleRegistrationModalOpen,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

export function useLayoutContext() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

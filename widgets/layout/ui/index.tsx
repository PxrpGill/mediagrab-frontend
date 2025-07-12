import type { PropsWithChildren } from "react";

import { LoginModal, RegistrationModal } from "@/features";

import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <RegistrationModal />
      <LoginModal />
      {children}
      <Footer />
    </>
  );
};

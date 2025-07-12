import "@/shared/styles/global.css";

import { MontserratFonts } from "@/shared";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={MontserratFonts.className}>{children}</body>
    </html>
  );
};

export default RootLayout;

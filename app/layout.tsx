import "@/shared/styles/global.css";

import { MontserratFonts } from "@/shared";
import { ThemeProvider } from "@/shared";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={MontserratFonts.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

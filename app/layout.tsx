import "@/shared/styles/global.css";

import { MontserratFonts } from "@/shared";
import { ThemeProvider } from "@/shared";
import { Layout } from "@/widgets";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={MontserratFonts.className}>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

import "@/shared/styles/global.css";

import { MontserratFonts } from "@/shared";
import { ThemeProvider } from "@/shared";
import { LayoutProvider } from "@/shared";
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
          <LayoutProvider>
            <Layout>{children}</Layout>
          </LayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

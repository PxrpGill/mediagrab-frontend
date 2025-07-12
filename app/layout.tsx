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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicons/favicon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicons/favicon-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicons/site.webmanifest" />
      </head>
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

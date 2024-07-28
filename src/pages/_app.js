import ScrollTop from "@/components/ScrollTop";
import "@/styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollTop />
      <Analytics />
      <GoogleTagManager gtmId="G-4PGCTFP3XD" />
    </>
  );
}

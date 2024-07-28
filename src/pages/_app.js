import ScrollTop from "@/components/ScrollTop";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ScrollTop />
      <Analytics />
    </>
  );
}

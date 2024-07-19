import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-100">
        <Main/>
        <NextScript />
        <script defer src="https://kit.fontawesome.com/7d3f73a100.js" crossOrigin="anonymous"></script>
      </body>
    </Html>
  );
}

import "@/styles/globals.css";
import { Roboto as Font } from "next/font/google";

const font = Font({ subsets: ["latin"], weight : ['400', '500', '700', '900'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

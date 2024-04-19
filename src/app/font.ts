import { Noto_Serif_Display, Barlow } from "next/font/google";

const notoSerifDisplay = Noto_Serif_Display({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-noto-serif-display",
});
const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--font-barlow",
});

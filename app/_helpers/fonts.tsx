import { Young_Serif, Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const yserif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yserif",
});

export const fonts = {
  outfit,
  yserif,
};

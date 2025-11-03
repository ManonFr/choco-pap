import Footer from "@/components/Footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Fjalla_One, Noto_Serif } from "next/font/google";

const fjallaOne = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Choco Pap",
  description: "La boutique en ligne du chocolat parfait",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${fjallaOne.variable} ${notoSerif.variable}`}>
      <head></head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

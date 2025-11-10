import "@fortawesome/fontawesome-free/css/all.min.css";
import { Fjalla_One, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CartProvider from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer/CartDrawer";

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
      <body>
        <CartProvider>
          <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}

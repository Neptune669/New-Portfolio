import { AOSInit } from "./aos";
import Footer from "./components/Footer";

import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Xtech",
  description: "Xtech is a software development company based in Egypt.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

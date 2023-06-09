"use client";
import Navbar from "@/components/template/Navbar";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import { Container } from "@mui/material";
import Footer from "@/components/modules/Footer";

const JosefinSans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Leather App",
  description: "Explore best Leather products here!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={JosefinSans.className}>
        <Container>
          <header>
            <Navbar />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </Container>
      </body>
    </html>
  );
}

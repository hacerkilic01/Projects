import Link from "next/link";
import "./globals.css";
import NavBar from "../components/Nav.Bar";
import { exo2, orbitron } from "./fonts";

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      {/* HTML belgesinin dilini belirtmek için  */}
      <body className="bg-rose-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-4 text-center text-slate-500 text text-xs">
          {/* border-t:üst kenarına bir kenarlık */}
          Game data and images courtesy of{" "}
          <a href="https://rawg.io/" target="_blank">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}

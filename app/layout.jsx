import TopNavbar from "./components/Navbar/TopNavbar";
import "./globals.css";
import { Righteous } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Movie app using Next.js",
  description: "Generated by create next app",
};

const righteous = Righteous({
  subsets: ["latin"],
  font: "google",
  weight: "400",
  style: "normal",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"min-h-screen " + righteous.className}>
        <header className="sticky top-0 z-50 text-3xl sm:text-md md:text-xl lg:text-lg xl:text-xl lg:justify-self-start">
          <TopNavbar />
        </header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}

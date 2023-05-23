import Providers from './Providers';
import './globals.css'
import { Righteous } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie app using Next.js',
  description: 'Generated by create next app',
}

const righteous = Righteous({
  subsets: ['latin'],
  font: 'google',
  weight: '400',
  style: 'normal'
  
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={righteous.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

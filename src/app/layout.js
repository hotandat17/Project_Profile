

import dynamic from 'next/dynamic';
import { Inter } from "next/font/google";
import Header from "@/compoment/header/header";
import '@/assets/body.css';
import { store, persistor } from '@/redux/store';
import StoreProvider from "./storeProvider";
import RootLayoutClient from './Persist';
import { Metadata } from 'next'
export const metadata = {
  title: 'HD - Profile',
  description: 'HD là nơi giới thiệu về profile cá nhân và cũng là nơi chỉa sẽ khóa học và ứng dụng free !!! (100% free)'
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}

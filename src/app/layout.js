

import dynamic from 'next/dynamic';
import { Inter } from "next/font/google";
import Header from "@/compoment/header/header";
import '@/assets/body.css';
import { store, persistor } from '@/redux/store';
import StoreProvider from "./storeProvider";
import RootLayoutClient from './Persist';
import { Metadata } from 'next'
import { connection } from '../../config/data';
export const metadata = {
  title: 'HDStore',
  description: 'HD là nơi giới thiệu về profile cá nhân và cũng là nơi chỉa sẽ khóa học và ứng dụng free !!! (100% free)'
}

const inter = Inter({ subsets: ["latin"] });
await connection()
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

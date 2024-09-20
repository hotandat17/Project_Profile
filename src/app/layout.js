'use client';

import dynamic from 'next/dynamic';
import { Inter } from "next/font/google";
import Header from "@/compoment/header/header";
import '@/assets/body.css';
import { store, persistor } from '@/redux/store';
import StoreProvider from "./StoreProvider";


const PersistGate = dynamic(
  () => import('redux-persist/integration/react').then((mod) => mod.PersistGate),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <PersistGate loading={null} persistor={persistor}>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </html>
      </PersistGate>
    </StoreProvider>
  );
}

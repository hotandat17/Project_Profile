'use client';

import dynamic from 'next/dynamic';
import Header from "@/compoment/header/header";
import StoreProvider from "./StoreProvider";
import { store, persistor } from '@/redux/store';

const PersistGate = dynamic(
    () => import('redux-persist/integration/react').then((mod) => mod.PersistGate),
    { ssr: false }
);

export default function RootLayoutClient({ children }) {
    return (
        <StoreProvider>
            <PersistGate loading={null} persistor={persistor}>
                <Header />
                {children}
            </PersistGate>
        </StoreProvider>
    );
}

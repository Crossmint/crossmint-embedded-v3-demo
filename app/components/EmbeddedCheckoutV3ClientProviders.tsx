"use client";

import { CrossmintCheckoutProvider, CrossmintProvider } from "@crossmint/client-sdk-react-ui";
import type { ReactNode } from "react";

export function EmbeddedCheckoutV3ClientProviders({ children }: { children: ReactNode }) {
    return (
        <CrossmintProvider apiKey={process.env.NEXT_PUBLIC_CROSSMINT_API_KEY!}>
            <CrossmintCheckoutProvider>{children}</CrossmintCheckoutProvider>
        </CrossmintProvider>
    );
}

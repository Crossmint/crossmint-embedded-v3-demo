"use client";

import { CrossmintCheckoutProvider, CrossmintProvider } from "@crossmint/client-sdk-react-ui";
import type { ReactNode } from "react";

export function EmbeddedCheckoutV3ClientProviders({ children }: { children: ReactNode }) {
    return (
        <CrossmintProvider apiKey="ck_staging_61iPStKPVHWHUcRxoL3TrqT6tzcBs6PkobPKYjLnhzdb4kcJDuxcqLbJjMy1unQumGbfYonNE7Ps4YzSFvaFL98cRmvTk3XTGHRi4A7v5Gy5SSMfb87z25zMSXWxTGALb5DUUgBDkKhFCz2KzYQWo57fMzE9WPszZnxuMqYCXLogi3SiKG2oXX36xvV1FX1KiBFgWPrLYM5Er3TzMbzVceRy">
            <CrossmintCheckoutProvider>{children}</CrossmintCheckoutProvider>
        </CrossmintProvider>
    );
}

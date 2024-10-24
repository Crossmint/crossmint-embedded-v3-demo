"use client";

import { CrossmintEmbeddedCheckout_Alpha, useCrossmintCheckout } from "@crossmint/client-sdk-react-ui";
import { useEffect } from "react";

const USE_CUSTOM_RENDERING = false;

export function EmbeddedCheckoutV3Content() {
    const { order } = useCrossmintCheckout();

    useEffect(() => {
        console.log("order in sdk", order);
    }, [order]);

    if (USE_CUSTOM_RENDERING) {
        switch (order?.phase) {
            case "completed":
                return <div>Custom completed screen</div>;
            case "delivery":
                return <div>Custom delivery screen</div>;
            default:
                return <CrossmintEmbeddedCheckoutWrapper />;
        }
    }

    return <CrossmintEmbeddedCheckoutWrapper />;
}

function CrossmintEmbeddedCheckoutWrapper() {
    return (
        <CrossmintEmbeddedCheckout_Alpha
            lineItems={{
                collectionLocator: "crossmint:464ba7b5-77f0-4a73-903b-947c9d910d97",
            }}
            payment={{
                crypto: {
                    enabled: true,
                },
                fiat: {
                    enabled: true,
                },
                defaultMethod: "fiat",
            }}
        />
    );
}
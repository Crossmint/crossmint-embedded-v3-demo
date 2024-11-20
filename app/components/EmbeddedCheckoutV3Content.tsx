"use client";

import { CrossmintEmbeddedCheckout_Alpha, useCrossmintCheckout } from "@crossmint/client-sdk-react-ui";
import { useSearchParams } from "next/navigation";
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
    const searchParams = useSearchParams();

    const recipient = searchParams.get("recipient");
    const appearance = searchParams.get("appearance");

    let parsedRecipient: Parameters<typeof CrossmintEmbeddedCheckout_Alpha>[0]["recipient"] | undefined;
    let parsedAppearance: Parameters<typeof CrossmintEmbeddedCheckout_Alpha>[0]["appearance"] | undefined;
    if (recipient) {
        parsedRecipient = JSON.parse(recipient as string)
    }
    if (appearance) {
        parsedAppearance = JSON.parse(appearance as string)
    }

    return (
        <CrossmintEmbeddedCheckout_Alpha
            recipient={parsedRecipient}
            appearance={parsedAppearance}
            lineItems={{
                collectionLocator: `crossmint:${process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID}`,
            }}
            payment={{
                receiptEmail: searchParams.get("receiptEmail") || undefined,
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

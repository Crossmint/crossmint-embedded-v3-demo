import { Suspense } from "react";
import { EmbeddedCheckoutV3ClientProviders } from "./components/EmbeddedCheckoutV3ClientProviders";
import { EmbeddedCheckoutV3Content } from "./components/EmbeddedCheckoutV3Content";

export default function EmbeddedCheckoutV3Page() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "start",
                padding: "20px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "start",
                    width: "100%",
                    maxWidth: "450px",
                }}
            >
                <EmbeddedCheckoutV3ClientProviders>
                    <Suspense fallback={<div>Loading...</div>}>
                    <EmbeddedCheckoutV3Content />
                    </Suspense>
                </EmbeddedCheckoutV3ClientProviders>
            </div>
        </div>
    );
}

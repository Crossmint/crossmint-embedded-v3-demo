"use client";

import { CrossmintHostedCheckout_Alpha, CrossmintProvider } from "@crossmint/client-sdk-react-ui";

export default function HostedCheckoutV3Page() {
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
				<CrossmintProvider apiKey={process.env.NEXT_PUBLIC_CROSSMINT_API_KEY!}>
					<CrossmintHostedCheckout_Alpha
						lineItems={{
							collectionLocator: `crossmint:${process.env.NEXT_PUBLIC_CROSSMINT_COLLECTION_ID}`,
						}}
						payment={{
							crypto: {
								enabled: true,
							},
							fiat: {
								enabled: true,
							},
						}}
					/>
				</CrossmintProvider>
			</div>
		</div>
	);
}

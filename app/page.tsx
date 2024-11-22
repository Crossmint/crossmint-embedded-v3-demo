import { Suspense } from "react";
import { EmbeddedCheckoutV3Content } from "./components/EmbeddedCheckoutV3Content";
import { CheckoutV3ClientProviders } from "./components/CheckoutV3ClientProviders";

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
				<CheckoutV3ClientProviders>
					<Suspense fallback={<div>Loading...</div>}>
						<EmbeddedCheckoutV3Content />
					</Suspense>
				</CheckoutV3ClientProviders>
			</div>
		</div>
	);
}

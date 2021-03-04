import React, { useState } from "react";

//create your first component
export function Home() {
	const [light, setLight] = useState("");

	function lightON(lightType) {
		setLight(lightType);
	}

	return (
		<div>
			<div className="container text-center">
				<div className="flow bg-dark"></div>
				<div className="square p-3 bg-dark">
					<div
						className={`redLight ${light == "red" ? "light" : ""}`}
						onClick={() => lightON("red")}></div>
					<div
						className={`orangeLight ${
							light == "orange" ? "light" : ""
						}`}
						onClick={() => lightON("orange")}></div>
					<div
						className={`greenLight ${
							light == "green" ? "light" : ""
						}`}
						onClick={() => lightON("green")}></div>
				</div>
			</div>
		</div>
	);
}

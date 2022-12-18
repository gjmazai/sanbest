import React, { FC } from "react";
import HeaderAdditional from "./HeaderAdditional";
import HeaderMain from "./HeaderMain";

const Headers: FC = () => {
	return (
		<div className="Headers">
			<HeaderAdditional />
			<HeaderMain />
		</div>
	);
};

export default Headers;


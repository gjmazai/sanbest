import React, { FC } from "react";
import Headers from "./Headers";
import ContentPreview from "./ContentPreview";

const Main: FC = () => {
	return (
		<div className="Main">
			<Headers />
			<ContentPreview />
		</div>
	);
};

export default Main;


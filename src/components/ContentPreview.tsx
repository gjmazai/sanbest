import React, { FC } from "react";
import ContentPreviewPromotion from "./ContentPreview/ContentPreviewPromotion";
import ContentPreviewHeader from "./ContentPreview/ContentPreviewHeader";

const ContentPreview: FC = () => {
	return (
		<div>
			<ContentPreviewHeader />
			<ContentPreviewPromotion />
		</div>
	);
};

export default ContentPreview;


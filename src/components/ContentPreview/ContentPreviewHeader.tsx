import React, { FC } from "react";
import iconBtn1 from "../../assets/img/btn_icon.svg";
import iconBtn2 from "../../assets/img/btn_icon2.svg";

const ContentPreview: FC = () => {
	return (
		<div className="ContentPreview">
			<button className="ContentPreview-btn">
				<div className="ContentPreview-btn_group">
					<img
						src={iconBtn1}
						alt=""
					/>
					<h1 className="ContentPreview-btn__name">Каталог</h1>
				</div>
				<img
					src={iconBtn2}
					alt=""
				/>
			</button>
			<input
				type="text"
				className="ContentPreview-input"
				placeholder="Поиск по сайту"
			/>
		</div>
	);
};

export default ContentPreview;


import React, { FC } from "react";
import MainLogo from "../assets/img/sanbest_logo1.svg";

const Preview: FC = () => {
	return (
		<div className="Preview">
			<img
				src={MainLogo}
				alt="logo"
			/>
			<h1>Главная</h1>
		</div>
	);
};

export default Preview;


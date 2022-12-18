import React, { FC, useState } from "react";
import MainLogo2 from "./../assets/img/sanbest_logo2.svg";
import LikeIcon from "../assets/img/like-icon.svg";
import DiagrammIcon from "../assets/img/diagramm-icon.svg";
import StoreIcon from "../assets/img/store-icon.svg";

const HeaderMain: FC = () => {
	let [cost, setCost] = useState(0);
	return (
		<div className="HeaderMain">
			<img
				src={MainLogo2}
				alt="logo2"
				className="HeaderMain-logo2"
			/>
			<div className="HeaderMain-callback">
				<p className="HeaderMain-callback__number">+7 (XXX) XXX XX XX</p>
				<div className="HeaderMain-callback__text">
					<p className="HeaderMain-callback__text__decor">Обратный звонок</p>
					<p className="HeaderMain-callback__text">Ежедневно с 9 до 22</p>
				</div>
			</div>
			<div className="HeaderMain-icons">
				<img
					src={LikeIcon}
					alt="like-icon"
					className="HeaderMain-icons__icon"
				/>
				<img
					src={DiagrammIcon}
					alt="diagramm-icon"
					className="HeaderMain-icons__icon"
				/>
				<img
					src={StoreIcon}
					alt="StoreIcon-icon"
					className="HeaderMain-icons__icon"
				/>
				<p className="HeaderMain-icons__text">{cost && 0} Р</p>
			</div>
		</div>
	);
};

export default HeaderMain;


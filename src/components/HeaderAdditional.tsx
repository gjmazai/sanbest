import React, { FC } from "react";

const HeaderAdditional: FC = () => {
	return (
		<div className="HeaderAdditional">
			<ul className="HeaderAdditional__list">
				<li className="HeaderAdditional-item">Бренды</li>
				<li className="HeaderAdditional-item__line">|</li>
				<li className="HeaderAdditional-item">Акции</li>
				<li className="HeaderAdditional-item__line">|</li>
				<li className="HeaderAdditional-item">Доставка и оплата</li>
				<li className="HeaderAdditional-item__line">|</li>
				<li className="HeaderAdditional-item">О компании</li>
				<li className="HeaderAdditional-item__line">|</li>
				<li className="HeaderAdditional-item">Контакты</li>
			</ul>
		</div>
	);
};

export default HeaderAdditional;


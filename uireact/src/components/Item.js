import React from 'react';
import '../scss/item.scss';
export const Item = ({render, text, expand}) => {
	return(
		<div className="item">
			<div className="selector"></div>
			<div className="icon-and-text">
				<div className="icon">{render()}</div>
				<div className="text">{text}</div>
			</div>
			{expand && <div>{expand()}</div>}
		</div>
	);
}
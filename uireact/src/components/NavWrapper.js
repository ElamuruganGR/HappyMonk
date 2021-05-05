import React from 'react';
import '../scss/nav-wrapper.scss';
import { Menu } from './Menu';
import { Teams } from './Teams';
import { Upgrade } from './Upgrade';
export const NavWrapper = () => {
	return(
		<div className="nav-wrapper">
			<Menu />
			<Teams />
			<Upgrade />
		</div>
	);
}
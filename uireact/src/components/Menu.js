import React from 'react';
import '../scss/menu.scss';
import { Item } from './Item';
export const Menu = () => {
	return(
		<div className="menu">
			<Item render={()=>(<img src="/images/nav/Dashboard.svg" alt="Overview" />)} text={`Overview`} />
			<Item render={()=>(<img src="/images/nav/Leaderboard.svg" alt="Leaderboard" />)} text={`Leaderboard`} />
			<Item render={()=>(<img src="/images/nav/view-list.svg" alt="Spreadsheets" />)} text={`Spreadsheets`} />
			<Item render={()=>(<img src="/images/nav/money-bill-stack.svg" alt="Administration" />)} text={`Administration`} />
			<Item render={()=>(<img src="/images/nav/shopping-bag.svg" alt="Sales" />)} text={`Sales`} expand={()=>(<img src="/images/nav/expand.svg" alt="Expand"/>)} />
			<Item render={()=>(<img src="/images/nav/calendar.svg" alt="Schedule" />)} text={`Schedule`} />
		</div>
	);
}
import React from 'react';
import '../scss/teams.scss';
import { Item } from './Item';
export const Teams = () => {
	return(
		<div className="teams">
			<div className="heading">Teams</div>
			<Item render={()=>(<img src="/images/nav/comment.svg" alt="comment" />)} text={`Message`} expand={()=>(<img src="/images/nav/Counter-Bubble.svg" alt="Counter-Bubble" />)}  />
			<Item render={()=>(<img src="/images/nav/phone.svg" alt="phone" />)} text={`Support`} />
		</div>
	);
}
import React from 'react';
import { HotelListItem } from './HotelListItem';

export class HotelList extends React.Component {
	render() {
		return (
			<div className="list-container">
				<HotelListItem />
				<HotelListItem />
				<HotelListItem />
			</div>
		)
	}
}
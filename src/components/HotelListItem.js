import React from 'react';

export class HotelListItem extends React.Component {
	render() {
		return (
			<div className="hotel-item">
				<div className="hotel-image">
					<img src="" alt="" />
				</div>
				<div className="hotel-content">
					<div className="hotel-name">Travelodge London Kings Cross Royal Scot</div>
					<div className="hotel-stars">3</div>
					<div className="hotel-address">100 KING S CROSS ROAD; WC1X 9DT London</div>
					<div className="hotel-price">426</div>
					<div className="hotel-rating">74</div>
				</div>
			</div>
		)
	}
}
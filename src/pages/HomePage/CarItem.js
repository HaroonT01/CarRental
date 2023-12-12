// CarItem.js
import React from 'react';

const CarItem = ({ car }) => {
  return (
    <div className="car-item">
      <h3>{car.make} {car.model}</h3>
      <p>Price per day: ${car.price}</p>
      {/* More car details */}
    </div>
  );
};

export default CarItem;

// CarList.js
import React from 'react';
import CarItem from './CarItem'; // Import CarItem component

const CarList = ({ cars }) => {
  return (
    <section>
      <h2>Available Cars</h2>
      <div className="car-list">
        {cars.map(car => (
          <CarItem key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default CarList;

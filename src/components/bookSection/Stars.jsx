import React from 'react';
import star from '../../assets/star.svg'

const Stars = () => {
    return (
      <div className="flex items-center space-x-1">
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        
        <span className="text-xs lg:text-sm">(4 Star)</span>
      </div>
    );
};

export default Stars;
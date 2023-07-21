import React from 'react';

function CardImageAndName({ image, children, className }) {
  return (
    <div className={`rowCenter ${className ? className : ''}`}>
      <img src={image} className="avatar" />
      {children}
    </div>
  );
}

export default CardImageAndName;

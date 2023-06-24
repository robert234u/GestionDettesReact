import React from 'react';

function CardImageAndName({ name, firstName, imagePath, children }) {
  return (
    <div>
      <img src={imagePath} />
      <div>
        <p>{firstName + ' ' + name}</p>
        {children}
      </div>
    </div>
  );
}

export default CardImageAndName;

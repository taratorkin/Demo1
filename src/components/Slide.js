import React from 'react';

export default function Slide({ carousel, imgIndex }) {
  const slideStyle = {
    display: 'flex',
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundImage: `url(${carousel[imgIndex].img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: 480,
    height: 270,
  };

  return (
    <div style={slideStyle}></div>
  );
}

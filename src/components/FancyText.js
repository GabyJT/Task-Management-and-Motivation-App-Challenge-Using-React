import React from 'react';
import './FancyText.css';

const FancyText = ({ title, text }) => {
  return (
    <div className={title ? 'fancy-title' : 'fancy-text'}>
      {text}
    </div>
  );
};

export default FancyText;

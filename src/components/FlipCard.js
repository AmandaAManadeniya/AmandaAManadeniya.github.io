import React from 'react';
import './FlipCard.css';

function FlipCard({ title, frontContent, children, isFlipped, onClick }) {
  return (
    <div className={`flip-card${isFlipped ? ' flipped' : ''}`}>
      {isFlipped && <button className="close-button" onClick={onClick}>×</button>}
      <div className="flip-card-front" onClick={() => !isFlipped && onClick()}>
        {frontContent || <h2>{title}</h2>}
      </div>
      <div className="flip-card-back">
        <h2>{title}</h2>
        <div className="details">{children}</div>
      </div>
    </div>
  );
}

export default FlipCard;
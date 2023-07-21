import React from 'react';
import './button.css';

export default function Button({ onClick, type, style, children }) {
  return style === 'secondary' ? (
    <div className="gradient-border">
      <div className="background-white">
        <button onClick={onClick} type={type} className="btn-secondary">
          {children}
        </button>
      </div>
    </div>
  ) : (
    <button onClick={onClick} type={type} className={`btn-${style}`}>
      {children}
    </button>
  );
}

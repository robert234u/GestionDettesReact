import React from 'react';
import './button.css';

export default function TextButton({ color, children, onClick, className }) {
  return (
    <button onClick={onClick} className={`txt-btn-${color} ${className}`}>
      {children}
    </button>
  );
}

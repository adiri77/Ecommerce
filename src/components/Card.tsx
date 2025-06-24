import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'medium',
  hover = false,
}) => {
  // Build CSS classes using our centralized theme system
  const classes = [
    'card', // Base card class from globals.css

    // Padding classes from globals.css
    padding === 'none' && 'card-padding-none',
    padding === 'small' && 'card-padding-small',
    padding === 'medium' && 'card-padding-medium',
    padding === 'large' && 'card-padding-large',

    // Custom classes
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      style={{
        transition: hover ? 'box-shadow 0.2s ease-in-out' : undefined,
        cursor: hover ? 'pointer' : undefined
      }}
    >
      {children}
    </div>
  );
};

export default Card;

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
}) => {
  // Build CSS classes using our centralized theme system
  const classes = [
    // Base button class from globals.css
    variant === 'primary' && 'btn-primary',
    variant === 'secondary' && 'btn-secondary',
    variant === 'outline' && 'btn-outline',
    variant === 'ghost' && 'btn-ghost',

    // Size classes from globals.css
    size === 'small' && 'btn-small',
    size === 'large' && 'btn-large',

    // Full width class from globals.css
    fullWidth && 'btn-full-width',

    // Custom classes
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={{ opacity: disabled ? 0.5 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
    >
      {children}
    </button>
  );
};

export default Button;

import clsx from 'clsx';
import React, { FC } from 'react';

type ButtonVariant = 'primary' | 'light';

type ButtonSize = 'small' | 'base' | 'large';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  size?: ButtonSize;
  ariaLabel?: string;
  onClick?: (e) => void;
};

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'base',
  ariaLabel,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={clsx(
        'button',
        variant === 'primary' && 'button--primary',
        variant === 'light' && 'button--light',
        size === 'base' && 'button--base',
        size === 'small' && 'button--small'
      )}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

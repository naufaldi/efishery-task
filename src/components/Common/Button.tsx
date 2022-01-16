import clsx from 'clsx';
import React, { FC } from 'react';
enum ButtonVariant {
  'primary',
  'light',
}

enum ButtonSize {
  'small',
  'base',
}

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  size?: ButtonSize;
  ariaLabel?: string;
};

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'base',
  ariaLabel,
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
    >
      {children}
    </button>
  );
};

export default Button;

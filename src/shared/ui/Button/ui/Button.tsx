'use client';

import {
  cloneElement,
  isValidElement
} from 'react';

import {
  ButtonOptions,
  ButtonProps
} from './types';
import { cn } from '@/shared/lib/classNames';
import cls from './Button.module.css';

export function Button<T extends ButtonOptions>({
  asChild,
  option,
  type = 'button',
  variant,
  size,
  className = '',
  children,
  disabled = false,
  underline = undefined,
  ...rest
}: ButtonProps<T>) {
  const buttonProps = {
    className: cn(
      cls[option],
      cls[variant],
      cls[size],
      {
        [cls.disabled]: disabled && asChild,
        [cls.underline]: underline
      },
      className
    ),
    ...rest
  };

  if (asChild && isValidElement(children)) {
    return cloneElement(children, buttonProps);
  }

  return (
    <button disabled={disabled} type={type} {...buttonProps}>
      {children}
    </button>
  );
}

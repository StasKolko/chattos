import { ButtonHTMLAttributes } from 'react';

export type ButtonTypes = 'button' | 'reset' | 'submit';
export type ButtonOptions = 'btn' | 'link' | 'icon';
export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonVariantsBtnAndIcon =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'successful';
export type ButtonVariantsLink = 'primary' | 'secondary';


export interface ButtonProps<T extends ButtonOptions> extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  option: T;
  type?: ButtonTypes;
  variant: T extends 'link' ? ButtonVariantsLink : ButtonVariantsBtnAndIcon;
  size: ButtonSizes;
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  underline?: T extends 'link' ? boolean : undefined;
  dataTestId?: string;
}
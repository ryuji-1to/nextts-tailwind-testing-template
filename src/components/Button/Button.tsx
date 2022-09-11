import type { ComponentPropsWithRef, ReactNode } from 'react';
import { forwardRef } from 'react';

type Props = {
  children: ReactNode;
} & ComponentPropsWithRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <button {...rest} ref={ref}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

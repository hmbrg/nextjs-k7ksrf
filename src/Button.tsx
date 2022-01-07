import { styled } from '@twind/react';

const Button = styled('button', {
  base: `
    border-none bg-variable
    rounded-full px-2.5 
  `,

  variants: {
    size: {
      sm: `text-sm h-6`,
      md: `text-base h-9`,
    },
    outlined: {
      true: `bg-transparent ring-1`,
    },
  },

  defaults: {
    size: 'sm',
  },
});

export default Button;

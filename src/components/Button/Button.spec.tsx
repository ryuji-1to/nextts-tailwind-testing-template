import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('component Button.tsx', () => {
  it('render hello', () => {
    render(<Button>hello</Button>);
    screen.getByText('hello');
  });
});

import { ReactNode } from 'react';

import { Container, GradientLine } from './styles';

interface GradientTitleProps {
  children: ReactNode;
}

export function GradientTitle({ children }: GradientTitleProps) {
  return (
    <Container>
      <h2>{children}</h2>
      <GradientLine />
    </Container>
  );
}

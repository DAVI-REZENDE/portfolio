import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const GradientLine = styled.div`
  height: 8px;
  width: 70%;
  border-radius: 1rem;

  background: ${({theme}) => theme['linear']};
`;
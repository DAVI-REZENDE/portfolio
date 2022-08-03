import styled from 'styled-components';

export const Container = styled.div`
  min-height: 90vh;
  background: url('/assets/waves.svg') no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  justify-content: center;
 
`;

export const Card = styled.div`
  background-color: ${({theme}) => theme['black-500']};
  border-radius: 5px;

  display: flex;
  gap: 1rem;

  max-width: 620px;
  padding: 1rem;

  span {
    width: 1px;
    background-color: ${({theme}) => theme['black-200']};
  }

  .links {
    strong {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 400;

      svg {
        color: ${({theme}) => theme['green-200']};
      }
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({theme}) => theme['white']};
      
    }
  }
`;
import styled from 'styled-components';

export const Container = styled.div`
  height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;

  div.images {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img {
      height: 64px;
      width: 60px;
      object-fit: contain;
    }
  }
`;

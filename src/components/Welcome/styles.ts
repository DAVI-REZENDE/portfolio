import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 1080px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
`;

export const Info = styled.div`
  strong {
    font-size: 1.5rem;
    font-weight: 800;
  }

  h1 {
    font-size: 4rem;
    font-weight: 800;
    background: linear-gradient(89.97deg, ${({theme}) => theme['brand-200']} 0.03%, ${({theme}) => theme['yellow-200']} 41.55%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    max-width: 300px;
    line-height: 66px;
  }

  .minbio {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({theme}) => theme['green-200']};
    max-width: 500px;
  }

  button {
    padding: 20px 40px;
    text-transform: uppercase;
    font-weight: 700;

    margin-top: 0.5rem;
    border-radius: 5px;
  }
`;
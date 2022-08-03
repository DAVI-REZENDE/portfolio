import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding: 1rem;
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 340px;
  width: 100%;
  padding: 0.5rem;
  background-color: ${({theme}) => theme["black-500"]};
  border-radius: 5px;

  .thumb {
    position: relative;
    border-radius: 5px;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
    }

    .buttons {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(5px);
      opacity: 0;
      transition: opacity 0.3s;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      a {
        background: ${({theme}) => theme["yellow-600"]};
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        font-size: 1rem;
        font-weight: 700;
        color: ${({theme}) => theme["white"]};
      }
    }

    &:hover {
      .buttons {
        opacity: 1;
      }
    }
  }

  h4 {
    background: linear-gradient(90deg, #C600E6 0%, #E6D80B 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
  }

  p {
    color: ${({theme}) => theme["gray-500"]};
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;

    .tag {
      background-color: ${({theme}) => theme["yellow-600"]};
      padding: 0.5rem 1rem;
      font-weight: 600;
      font-size: 14px;
      border-radius: 999px;
      color: ${({theme}) => theme["black-500"]};
    }
  }
`;

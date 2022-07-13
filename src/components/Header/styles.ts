import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.19);
  backdrop-filter: blur(4px);

  position: fixed;
  width: 100%;
`;

export const Header = styled.header`
  max-width: 1080px;
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;

  nav {
    display: flex;
    gap: 16px;
    a {
      color: ${({theme}) => theme['white']};
      text-decoration: none;
      &:active {
        color: ${({theme}) => theme['green-500']};
      }
    }
  }
`;
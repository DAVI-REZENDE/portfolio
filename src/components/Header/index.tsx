import { HeaderContainer, Header as HeaderStyled } from './styles';

interface HeaderProps {
  
}

export function Header({  }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderStyled>
        <img src="/assets/logo.svg" alt="Davi Rezende" />

        <nav>
          <a href="">About me</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </nav>
      </HeaderStyled>
    </HeaderContainer>
  );
}

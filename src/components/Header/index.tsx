import { HeaderContainer, Header as HeaderStyled } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderStyled>
        <img src="/assets/logo.svg" alt="Davi Rezende" />

        <nav>
          <a href="#about-me">About me</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          {/* <a href="">Contact</a> */}
        </nav>
      </HeaderStyled>
    </HeaderContainer>
  )
}

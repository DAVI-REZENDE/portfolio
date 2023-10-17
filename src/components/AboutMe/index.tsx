import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  LinkSimpleHorizontal,
} from 'phosphor-react'
import { GradientTitle } from '../GradientTitle'

import { Container, Card, HeroGradient } from './styles'

export function AboutMe() {
  return (
    <Container id="about-me">
      <HeroGradient>
        <GradientTitle>About Me</GradientTitle>

        <Card>
          <p>
            Always learning new ways to develop. Attentive to details, always
            looking for the best results. I am a person determined to fulfill
            what was asked of me, always giving my best in every task, I am 16
            years old and have studied programming since I was 12 years old,
            progressing more every day to be ready for the job market.
          </p>

          <div className="links">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/DAVI-REZENDE"
            >
              <GithubLogo weight="fill" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/davirezendeps/"
            >
              <LinkedinLogo weight="fill" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:daviresendes12@gmail.com"
            >
              <EnvelopeSimple />
            </a>
          </div>
        </Card>
      </HeroGradient>
    </Container>
  )
}

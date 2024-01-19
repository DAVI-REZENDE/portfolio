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
            I have loved programming since I was 12 years old, I have been
            working as a programmer since I was 16 years old. Focusing on the
            frontend, I always like to surprise with modern, innovative and
            accessible layouts. I have experience in both web and mobile
            programming.
            <span className="reference">
              I finish a task faster than the Millennium Falcon does the Kessel
              run ("less than twelve parsecs.")
              <img
                src="/assets/falcon.png"
                alt="millenium falcon"
                className="falcon"
              />
            </span>
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

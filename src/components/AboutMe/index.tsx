import { EnvelopeSimple, GithubLogo, LinkedinLogo, LinkSimpleHorizontal } from 'phosphor-react';
import { GradientTitle } from '../GradientTitle';

import { Container, Card } from './styles';

interface AboutMeProps {
}

export function AboutMe({  }: AboutMeProps) {
  return (
    <Container>
      <GradientTitle>About Me</GradientTitle>

      <Card>
        <p>Always learning new ways to develop. Attentive to details, always looking for the best results. I am a person determined to fulfill what was asked of me, always giving my best in every task, I am 16 years old and have studied programming since I was 12 years old, progressing more every day to be ready for the job market.</p>

        <span />

        <div className="links">
          <strong>
            <LinkSimpleHorizontal />
            links
          </strong>
          <a rel="noreferrer" target="_blank" href='https://github.com/DAVI-REZENDE'>
            <GithubLogo weight="fill" />
            github
          </a>
          <a rel="noreferrer" target="_blank" href='https://www.linkedin.com/in/davirezendeps/'>
            <LinkedinLogo weight="fill" />
            linkedIn
          </a>
          <a rel="noreferrer" target="_blank" href='mailto:daviresendes12@gmail.com'>
            <EnvelopeSimple />
            e-mail
          </a>
        </div>
      </Card>
    </Container>
  );
}

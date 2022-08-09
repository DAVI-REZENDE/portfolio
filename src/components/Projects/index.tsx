import { GithubLogo, LinkSimpleHorizontal } from 'phosphor-react';
import { GradientTitle } from '../GradientTitle';

import { Container, Cards, Card } from './styles';

type ObjectLink = {
  type: string;
  url: string;
}

interface ProjectType {
  id: string;
  title: string;
  thumb: string;
  description: string;
  publishedAt: string;
  githubLink: ObjectLink;
  deployLink: ObjectLink;
  tags: string[]
}

interface PropsType {
  projects?: ProjectType[]
}

export const Projects = ({ projects }: PropsType) => {

  return (
    <Container>
      <GradientTitle>Projects</GradientTitle>

      <Cards>
        {projects?.map((project, index) => (
          <Card key={index}>
            <div className='thumb'>
              <img src={project.thumb} />

              <div className="buttons">
                <a href={project.deployLink.url} rel="noreferrer" target="_blank">
                  <LinkSimpleHorizontal weight="bold" />
                </a>

                <a href={project.githubLink.url} rel="noreferrer" target="_blank">
                  <GithubLogo weight='bold' />
                </a>
              </div>
            </div>

            <h4>{project.title}</h4>

            <p>{project.description}</p>

            <div className="tags">
              {project.tags.map((tag, index) => (
                <div key={index} className="tag">
                  {tag}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </Cards>
    </Container>
  );
}
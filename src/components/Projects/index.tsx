import { useState } from 'react'
import { GithubLogo, LinkSimpleHorizontal } from 'phosphor-react'
import { GradientTitle } from '../GradientTitle'

import { Container, Cards, Card } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-cards'

import { EffectCards } from 'swiper/modules'

type ObjectLink = {
  type: string
  url: string
}

interface ProjectType {
  id: string
  title: string
  thumb: string
  description: string
  publishedAt: string
  githubLink: ObjectLink
  deployLink: ObjectLink
  tags: string[]
}

interface PropsType {
  projects?: ProjectType[]
}

export const Projects = ({ projects }: PropsType) => {
  return (
    <Container id="projects">
      <GradientTitle>Projects</GradientTitle>

      <Swiper
        className="container-cards"
        effect="cards"
        grabCursor
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCards]}
      >
        {projects?.map((project, index) => (
          <SwiperSlide key={index}>
            <Card>
              <div className="thumb">
                <img src={project.thumb} alt={project.title} />

                <div className="buttons">
                  <a
                    href={project.deployLink.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <LinkSimpleHorizontal weight="bold" />
                  </a>

                  <a
                    href={project.githubLink.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <GithubLogo weight="bold" />
                  </a>
                </div>
              </div>

              <h4>{project.title}</h4>

              <p>{project.description}</p>

              <span className="tech-title">Technologies:</span>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <div key={index} className="tag">
                    {tag}
                  </div>
                ))}
              </div>

              <div className="published-at">
                <span>{project.publishedAt}</span>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

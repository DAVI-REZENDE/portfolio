import { GradientTitle } from '../GradientTitle'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Container, SkillCard, WrapperSkills } from './styles'
import { skills } from '../../data/skills'
import Image from 'next/image'

export function Skills() {
  return (
    <Container id="skills">
      <GradientTitle>Skills</GradientTitle>
      <WrapperSkills>
        {skills.map((skill) => {
          return (
            <SkillCard key={skill.image}>
              <Image
                src={skill.image}
                alt={skill.title}
                width={200}
                height={300}
                objectFit="contain"
              />
              <div className="content">
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </div>
            </SkillCard>
          )
        })}
      </WrapperSkills>
    </Container>
  )
}

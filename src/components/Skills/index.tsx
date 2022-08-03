import Image from 'next/image';
import { ReactNode } from 'react';
import { skills } from '../../data/skills';
import { GradientTitle } from '../GradientTitle';

import { Container } from './styles';

export function Skills() {
  return (
    <Container>
      <GradientTitle>Technologies</GradientTitle>

      <div className='images'>
        {skills.map((skill, index) => (
          <Image 
            key={index}
            src={skill.logo} 
            width={90}
            height={64}
          />
        ))}
      </div>
    </Container>
  );
}

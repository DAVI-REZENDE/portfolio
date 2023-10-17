import { MapPinLine } from 'phosphor-react'
import { GradientTitle } from '../GradientTitle'
import { Office } from '../Office'
import { Container, WrapperOffices } from './styles'

export function Experience() {
  return (
    <Container id="experience">
      <GradientTitle>Experience</GradientTitle>

      <WrapperOffices>
        <Office.Root>
          <Office.Icon>
            <MapPinLine />
          </Office.Icon>
          <Office.Title>
            Software Engineer at Smart New System, Goiânia
          </Office.Title>
          <Office.Period>June 2022 - Present</Office.Period>
          <Office.Description>
            Refactoring a system that is one of the main products of the
            company, front-end of the mobile application for customers who want
            to monitor equipment. Working with: ReactJS, Next.js, React Native,
            Styled Components, Stitches, JavaScript, TypeScript, Tamagui,
            Docker, REST API, Git, HTML, CSS
          </Office.Description>
        </Office.Root>
      </WrapperOffices>
    </Container>
  )
}

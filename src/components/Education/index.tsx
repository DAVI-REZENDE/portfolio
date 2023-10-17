import { Medal } from 'phosphor-react'
import { GradientTitle } from '../GradientTitle'
import { Office } from '../Office'
import { Container, WrapperOffices } from './styles'

export function Education() {
  return (
    <Container id="education">
      <GradientTitle>Education</GradientTitle>

      <WrapperOffices>
        <Office.Root>
          <Office.Icon>
            <Medal />
          </Office.Icon>
          <Office.Title>Finished the high school</Office.Title>
          <Office.Period>January 2023 - June 2023</Office.Period>
        </Office.Root>
      </WrapperOffices>
    </Container>
  )
}

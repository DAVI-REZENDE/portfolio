import styled from 'styled-components'

export const Container = styled.div`
  min-height: 70vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  padding: 2rem;
  max-width: 908px;
  margin: 0 auto;
`

export const WrapperSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  width: 100%;
`

export const SkillCard = styled.div`
  background-color: #18181b;
  border: 1px solid #3f3f46;
  padding: 16px;
  border-radius: 8px;

  display: flex;
  gap: 20px;
  align-items: center;

  img {
    width: 280px;
  }

  h4 {
    font-size: 20px;
    font-weight: 700;
  }

  p {
    color: #a1a1aa;
    font-size: 14px;
  }

  .content {
    display: flex;
    flex-direction: column;
  }
`

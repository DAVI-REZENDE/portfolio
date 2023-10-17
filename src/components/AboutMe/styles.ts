import styled from 'styled-components'

export const Container = styled.div`
  min-height: 90vh;
  background: url('/assets/waves.svg') no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  justify-content: center;
`

export const HeroGradient = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 51.56%);
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  max-width: 908px;
  padding: 1rem;

  p {
    color: #fff;
    text-align: center;
    font-size: 20px;
  }

  .links {
    display: flex;
    gap: 16px;

    a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme['gray-200']};
      border-radius: 8px;
      border: 1px solid var(--zinc-700, #3f3f46);
      background: var(--zinc-800, #27272a);
      padding: 8px;
      border-radius: 8px;
      font-size: 28px;
      cursor: pointer;
    }
  }
`

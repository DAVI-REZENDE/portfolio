import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  aspect-ratio: 1/1;
  font-size: 32px;
  background: var(--zinc-800, #27272a);
  border-radius: 999px;
  color: #ffffff80;
`

export const Title = styled.h3`
  color: var(--zinc-100, #f4f4f5);
  font-size: 28px;
  font-weight: 700;
`

export const Period = styled.span`
  color: var(--zinc-400, #a1a1aa);
  font-size: 16px;
  font-weight: 500;
`

export const Description = styled.p`
  color: var(--zinc-300, #d4d4d8);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`

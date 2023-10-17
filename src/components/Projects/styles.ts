import styled from 'styled-components'
import { SwiperSlide } from 'swiper/react'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  /* padding: 1rem; */
  padding-bottom: 4rem;

  .container-cards {
    width: 360px;
    height: 600px;
  }
`

export const Cards = styled.div`
  width: 100%;
  display: flex;
`

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 600px;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme['black-500']};
  border-radius: 5px;

  .thumb {
    position: relative;
    border-radius: 5px;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
    }

    .buttons {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(5px);
      opacity: 0;
      transition: opacity 0.3s;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      a {
        background: ${({ theme }) => theme['yellow-600']};
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        font-size: 1rem;
        font-weight: 700;
        color: ${({ theme }) => theme.white};
      }
    }

    &:hover {
      .buttons {
        opacity: 1;
      }
    }
  }

  h4 {
    background: linear-gradient(90deg, #77008a 0%, #99900f 50%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
  }

  p {
    color: ${({ theme }) => theme['gray-500']};
    width: 100%;
    /* height: 80px; */
    line-height: 20px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-box-orient: vertical;
    box-orient: vertical;
    -webkit-line-clamp: 5;
    -moz-line-clamp: 5;
    -ms-line-clamp: 5;
    line-clamp: 5;
    overflow: hidden;
  }

  .tech-title {
    margin-top: 0.5rem;
    color: ${({ theme }) => theme['gray-500']};
    text-transform: uppercase;
  }

  .tags {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;

    padding-bottom: 5px;
    max-height: 170px;
    overflow: hidden;
    text-overflow: ellipsis;
    content: '';
    position: relative;

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: linear-gradient(
        transparent 150px,
        ${({ theme }) => theme['black-500']}
      );
    }

    .tag {
      /* background-color: ${({ theme }) => theme['yellow-600']}; */
      background-color: #39393961;
      backdrop-filter: blur(10px);
      border: 1px solid #3a3a3a;
      padding: 4px 8px;
      font-size: 14px;
      border-radius: 8px;
      color: #a1a1a1;
    }
  }

  .published-at {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    span {
      color: ${({ theme }) => theme['gray-500']};
    }
  }
`

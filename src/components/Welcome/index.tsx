import Lottie from 'react-lottie';
import animationData from '../../../public/assets/programming.json'
import { Container, Info } from './styles';

interface WelcomeProps {

}

export function Welcome({  }: WelcomeProps) {
  return (
    <Container>
      <Info>
        <strong>👋 Hi, I{"'"}m </strong>
        <h1>Davi Rezende</h1>
        <strong className='minbio'>DEVELOPER FRONT-END, ReactJS and React Native</strong>
        <a href="assets/resume-davi-rezende.pdf" download>
          <button>Download Resume</button>
        </a>
      </Info>

      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        }}
        height={400}
        width={560}
      />
    </Container>
  );
}

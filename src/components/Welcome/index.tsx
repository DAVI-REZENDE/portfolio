import Lottie from 'react-lottie';
import animationData from '../../../public/assets/programming.json'
import animationData2 from '../../../public/assets/programming2.json'
import { Container, Info } from './styles';

interface WelcomeProps {

}

export function Welcome({  }: WelcomeProps) {
  return (
    <Container>
      <Info>
        <strong>👋 Hi, I'm </strong>
        <h1>Davi Rezende</h1>
        <strong className='minbio'>DEVELOPER FRONT-END, ReactJS and React Native</strong>
        <button>Download Resume</button>
      </Info>

      <Lottie 
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData2,
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

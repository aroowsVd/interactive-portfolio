import { Html, useProgress } from "@react-three/drei";
import { useLoaderStore } from "../stores/loading";
import styled, { keyframes } from "styled-components";

function Loader({ isComplete }) {
  // loading store import
  const { isEntered, setIsEntered } = useLoaderStore();

  const progress = useProgress();

  return !isEntered && (
    <Html center>
      <Spinner0>
        <Spinner1>
          <Progress>
            {isComplete ? 100 : progress.progress}%
          </Progress>
        </Spinner1>
      </Spinner0>
    </Html>
  );
}

export default Loader;

const spinning = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner0 = styled.div`
  background-image: linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 255, 255));
  width: 250px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  filter: blur(1px);
  box-shadow: 0px -8px 30px 0px rgb(186, 66, 255), 0px 8px 30px 0px rgb(0, 225, 255);
  animation: ${spinning} 1.7s linear infinite;
`;

const Spinner1 = styled.div`
  background-color: #000;
  width: 250px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  filter: blur(10px);
`;

const Progress = styled.span`
  color: #fff;
`;



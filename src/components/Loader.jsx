import { Html, Points, useProgress } from "@react-three/drei";
import { useLoaderStore } from "../stores/loading";
import styled, { keyframes } from "styled-components";

function Loader({ isComplete }) {
  // loading store import
  const { isEntered, setIsEntered } = useLoaderStore();

  const progress = useProgress();

  return !isEntered && (
    <Html center>
      <LoadingWrapper>
        <Spinner0>
          <Spinner1>
          </Spinner1>
        </Spinner0>
        <Fprogress>{isComplete ? 100 : progress.progress}%</Fprogress>
        <ButtonW $isComplete={ isComplete }>
          <button onClick={() => setIsEntered()}>
            Enter
          </button>
        </ButtonW>
      </LoadingWrapper>
    </Html>
  );
}

export default Loader;

const LoadingWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

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

const Fprogress = styled.span`
  color: #fff;
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonW = styled.div.attrs(() => ({}))`
  position: absolute;
  top: calc(100% + 30px);
  opacity: ${(props) => (props.$isComplete ? 1 : 0)};
  pointer-events: ${(props) => (props.$isComplete ? 'auto' : 'none')};
  transition: opacity 0.6s ease-in-out;
  button {
    position: relative;
    width: 8em;
    height: 3em;
    border: 3px ridge rgb(0, 255, 255);
    outline: none;
    background-color: transparent;
    color: white;
    transition: 0.5s;
    border-radius: 0.3em;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    &::after {
      content: "";
      position: absolute;
      top: -10px;
      left: 5%;
      width: 90%;
      height: 40%;
      background-color: #000;
      transition: 0.3s;
      transform-origin: center;
    }
    &::before {
      content: "";
      position: absolute;
      top: 80%;
      left: 5%;
      width: 90%;
      height: 40%;
      background-color: #000;
      transition: 0.3s;
      transform-origin: center;
    }
    &:hover::before, &:hover::after {
      transform: scale(0)
    }
    &:hover {
      box-shadow: inset 0px 0px 25px rgb(0, 255, 255);
    }
  }
`;
import styled from "styled-components";
import MainCanvas from "./components/MainCanvas"
import GlobalStyle from "./styles/GlobalStyle"

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <MainCanvas />
    </Wrapper>
  )
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
`;

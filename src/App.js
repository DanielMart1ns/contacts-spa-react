import Header from "./components/Header";
import GlobalStyle, { Container } from "./styles/index";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;

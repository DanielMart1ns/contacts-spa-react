import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyle, { Container } from "./styles/index";
import Home from "./pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </>
  );
}

export default App;

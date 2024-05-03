import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyle, { Container } from "./styles/index";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new",
    element: <RegisterForm />,
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

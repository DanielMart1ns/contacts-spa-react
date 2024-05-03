import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GlobalStyle, { Container } from "./styles/index";
import Home from "./pages/Home";
import RegisterForm from "./pages/RegisterForm";
import { Provider } from "react-redux";
import store from "./store";

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
      <Provider store={store}>
        <Container>
          <RouterProvider router={routes} />
        </Container>
      </Provider>
    </>
  );
}

export default App;

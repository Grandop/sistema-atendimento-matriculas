import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./global";
import { router } from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
}

export default App;

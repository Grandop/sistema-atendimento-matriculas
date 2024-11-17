import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./global";
import { router } from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <GlobalStyles />
      </QueryClientProvider>
    </>
  );
}

export default App;

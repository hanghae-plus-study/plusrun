import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./lib/router";
import Providers from "./store/Providers";

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;

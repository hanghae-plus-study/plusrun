import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./lib/router";

function App() {
  return (
    <div>
      <h1 className="bg-red text-white text-3xl font-bold underline">Plus run</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

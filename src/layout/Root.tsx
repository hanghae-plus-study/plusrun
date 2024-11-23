import { Outlet } from "react-router-dom";
import { GNB } from "../pages/homes/GNB/GNB";

function Root() {
  return (
    <>
      <GNB />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;

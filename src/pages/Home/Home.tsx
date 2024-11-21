import { GNB } from "./GNB/GNB";
import banner from "../../assets/banner.svg";

export const Home = () => {
  return (
    <div>
      <GNB />
      <img src={banner} alt="banner" className="w-full h-96" />
    </div>
  );
};

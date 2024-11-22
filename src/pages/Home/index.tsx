import banner from "../../assets/banner.svg";
import { GNB } from "./GNB/GNB";

function HomePage() {
  return (
    <div>
      <GNB />
      <img src={banner} alt="banner" className="w-full h-96 object-cover" />
    </div>
  );
}

export default HomePage;

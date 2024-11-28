import banner from "../../assets/banner.svg";

function HomePage() {
  return (
    <div>
      <img src={banner} alt="banner" className="w-full h-96 object-cover" />
    </div>
  );
}

export default HomePage;

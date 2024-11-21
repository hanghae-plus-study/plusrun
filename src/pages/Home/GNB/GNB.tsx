import logo from "../../../assets/plusrun.svg";
import Button from "../../../components/button/button";
import SearchBar from "../Components/SearchBar";

export const MENU = [
  { id: 1, title: "강의", link: "/course" },
  { id: 2, title: "커뮤니티", link: "/community" },
];

export const GNB = () => {
  return (
    <div className="flex items-center shadow-md  w-full h-16 bg-white ml-4 ">
      <img src={logo} alt="logo" className="w-100 h-10" />
      {MENU.map(({ id, title, link }) => (
        <h1 key={id} className="mx-6 my-4">
          {title}
        </h1>
      ))}
      <SearchBar onSearch={(query) => console.log(query)} />
      <Button variant="primary" size="medium">
        로그인
      </Button>
    </div>
  );
};

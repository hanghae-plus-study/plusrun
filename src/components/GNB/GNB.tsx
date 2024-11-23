import logo from "../../assets/logo.svg";
import Button from "../button/button";
import SearchBar from "../../pages/homes/Components/SearchBar";
import { NavLink, useNavigate } from "react-router-dom";

export const MENU = [
  { id: 1, title: "강의", link: "/course" },
  { id: 2, title: "커뮤니티", link: "/community" },
];

export const GNB = () => {
  const navigate = useNavigate();
  const moveToLogin = () => {
    navigate("/login");
  };

  const moveToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex gap-16 items-center justify-center shadow-md  w-full h-16 bg-white ml-4 px-20">
      <img src={logo} alt="logo" className="w-30 h-10" onClick={moveToHome} />

      <div className="flex">
        {MENU.map(({ id, title, link }) => (
          <NavLink to={link} key={id} className="mx-6 my-4 cursor-pointer">
            {title}
          </NavLink>
        ))}
      </div>
      <SearchBar onSearch={(query) => console.log(query)} />
      <Button variant="primary" size="medium" onClick={moveToLogin}>
        로그인
      </Button>
    </div>
  );
};

import logo from "../../assets/logo.svg";
import Button from "../button/button";
import SearchBar from "../../pages/home/Components/SearchBar";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../../lib/supabase";

export const MENU = [
  { id: 1, title: "강의", link: "/course" },
  { id: 2, title: "커뮤니티", link: "/community" },
];

export const GNB = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate("/");
  };

  const handleLogin = () => {
    if (isLoggedIn) {
      supabase.auth.signOut().then(() => {
        setIsLoggedIn(false);
        moveToHome();
      });
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      const authInfo = await supabase.auth.getSession();
      const session = authInfo.data.session;
      setIsLoggedIn(session !== null);
    };
    checkLogin();
  }, []);

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
      <Button variant="primary" size="medium" onClick={handleLogin}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </Button>
    </div>
  );
};

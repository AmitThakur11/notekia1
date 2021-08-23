import "./header.css";

import Logo from "../svg/logo2.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="err" width="50px" />
        <div className="name">NOTEkia</div>
      </div>
      <div className="header-link">
        <div>Home</div>
        <div>Login</div>
      </div>
    </header>
  );
};

export default Header;

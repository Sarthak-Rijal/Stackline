import logo from './stackline_logo.svg';
import '../header/header.scss'

function Header() {
  return (
    <div className="header">
        <div className="logo-container">
            <img src={logo} className="header-logo" href="https://www.stackline.com/" alt=""/>
        </div>
    </div>
  );
}

export default Header;

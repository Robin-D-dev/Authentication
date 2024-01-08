import { useDispatch } from "react-redux";
import "../../../assets/stylesheets/layout/header.scss";
import logoutIcon from "../../../assets/images/header/logout.png";
import { Image } from "react-bootstrap";
import { logout } from "../../../reducers/auth";


const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="d-flex align-items-center justify-content-end">
      <Image src={logoutIcon} alt="logout" className="logout-icon" onClick={() => dispatch(logout())} />
    </header>
  );
}

export default Header;
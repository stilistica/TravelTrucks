import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import s from "./Header.module.css";
import sprite from "../../assets/icons/sprite.svg#icon-logo";
import clsx from "clsx";

const Header = () => {
  const activeLink = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.container}>
          <Link to="/">
            <svg className={s.svg}>
              <use href={`${sprite}#icon-logo`}></use>
            </svg>
          </Link>
          <nav className={s.nav}>
            <NavLink to="/" className={activeLink}>
              Home
            </NavLink>
            <NavLink to="/catalog" className={activeLink}>
              Catalog
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;

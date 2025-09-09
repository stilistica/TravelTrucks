import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import s from "./Header.module.css";
import sprite from "../../assets/icons/sprite.svg";
import clsx from "clsx";

const Header = () => {
  const activeLink = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.container}>
          <Link to="/" aria-label="Home">
            <svg className={s.svg}>
              <use href={`${sprite}#icon-logo`}></use>
            </svg>
          </Link>
          <nav className={s.nav}>
            <NavLink to="/" className={activeLink} aria-label="Home">
              Home
            </NavLink>
            <NavLink to="/catalog" className={activeLink} aria-label="Catalog">
              Catalog
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;

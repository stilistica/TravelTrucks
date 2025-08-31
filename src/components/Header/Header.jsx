import { Link } from "react-router-dom";
import Container from "../Container/Container";
import s from "./Header.module.css";
import sprite from "../../assets/icons/sprite.svg#icon-logo";

const Header = () => {
  return (
    <header>
      <Container>
        <div>
          <Link to="/">
            <svg>
              <use href={`${sprite}#icon-logo`}></use>
            </svg>
          </Link>
          <nav>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
						<NavLink to="/catalog" className={buildLinkClass}>
              Home
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;

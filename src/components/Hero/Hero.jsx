import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";
import s from "./Hero.module.css";
import Button from "../Button/Button";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className={s.hero}>
      <Container>
        <div className={s.container}>
          <div className={s.text}>
            <h1>Campers of your dreams</h1>
            <p>You can find everything you want in our catalog</p>
          </div>
          <Button onClick={() => navigate("/catalog")}>View Now</Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

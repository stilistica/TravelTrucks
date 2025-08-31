import { useEffect, useState } from "react";
import s from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) {
      navigate("/", { replace: true });
      return;
    }

    const interval = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(interval);
  }, [countdown, navigate]);

  return (
    <div className={s.notFound}>
      <h1>Page Not Found</h1>
      <p>Redirecting to the homepage in {countdown}...</p>
    </div>
  );
}

export default NotFound;

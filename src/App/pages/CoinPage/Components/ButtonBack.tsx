import { useNavigate } from "react-router-dom";

import ButtonBackStyle from "./ButtonBack.module.scss";

export const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <div className={ButtonBackStyle.button} onClick={() => navigate(-1)} />
  );
};

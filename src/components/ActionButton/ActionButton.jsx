import { Link } from "react-router-dom";
import s from './ActionButton.module.css';

const ActionButton = ({ text, link }) => {
  return (
    <Link to={`${link}`} className={s.actionBtn}>{text}</Link>
  );
};

export default ActionButton;
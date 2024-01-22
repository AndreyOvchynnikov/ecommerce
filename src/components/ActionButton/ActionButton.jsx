import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import s from './ActionButton.module.css';

const ActionButton = ({ text, link }) => {

  const { ref, inView } = useInView({ triggerOnce: false, rootMargin: "-100px 0px", });

  return (
    <div ref={ref} className={inView? s.animatedBtn : ""}>
      <Link to={`${link}`} className={s.actionBtn}>{text}</Link>
    </div>
    
  );
};

export default ActionButton;
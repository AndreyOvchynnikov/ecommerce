import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useStateContext } from "components/context/StateContext";
import s from "./Carousel.module.css";


const Carousel = ({ carouselProducts }) => {

  const card = useRef();
  const cardsWrapper = useRef();
  const carouselViewPort = useRef();
  const [translateX, setTranslateX] = useState(0);
  const { addTrendingProduct } = useStateContext();

  const handleClick = (direction) => {

    let cardWidth = parseInt(
      getComputedStyle(card.current).width.replace("px", "")
    );
    let cardsWrapperWidth = parseInt(
      getComputedStyle(cardsWrapper.current).width.replace("px", "")
    );
    let carouseViewPortWidth = parseInt(
      getComputedStyle(carouselViewPort.current).width.replace("px", "")
    );

    const containerPadding = 15;

    if (
      direction === "rightArrow" &&
      -translateX < cardsWrapperWidth - carouseViewPortWidth
    ) {
      setTranslateX(translateX - cardWidth - containerPadding);
    } else if (direction === "leftArrow" && translateX < 0) {
      setTranslateX(translateX + cardWidth + containerPadding);
    }
  };
    
    
  return (
    <div className={s.carousel}>
      <div
        onClick={() => {
          handleClick("leftArrow");
        }}
        className={s.navLeft}
      >
        <span>&#8592;</span>
      </div>
      <div
        onClick={() => {
          handleClick("rightArrow");
        }}
        className={s.navRight}
      >
        <span>&#8594;</span>
      </div>
      <div className={s.carouselVp} ref={carouselViewPort}>
        <div
          ref={cardsWrapper}
          className={s.cardsWrap}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {carouselProducts.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className={s.link}
              onClick={() => addTrendingProduct(product)}
            >
              <div ref={card} className={s.carouselCard}>
                <img
                  src={product.img}
                  alt={product.name}
                  className={s.cardImg}
                />
                <div className={s.cardTitle}>{product.description}</div>
                <div className={s.cardPrice}>{product.price}$</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import s from "./Carousel.module.css";


const Carousel = ({ carouselProducts }) => {
  const card = useRef();
  const cardsWrapper = useRef();
  const carouselViewPort = useRef();
  const [translateX, setTranslateX] = useState(0);

  const carosel = (direction) => {
    let cardWidth = parseInt(
      getComputedStyle(card.current).width.replace("px", "")
    );
    let cardsWrapperWidth = parseInt(
      getComputedStyle(cardsWrapper.current).width.replace("px", "")
    );
    let carouseViewPortWidth = parseInt(
      getComputedStyle(carouselViewPort.current).width.replace("px", "")
    );

    if (
      direction === "rightArrow" &&
      -translateX < cardsWrapperWidth - carouseViewPortWidth
    ) {
      setTranslateX(translateX - cardWidth - 19);
    } else if (direction === "leftArrow" && translateX < 0) {
      setTranslateX(translateX + cardWidth + 19);
    }
    };
    
    
  return (
    <div className={s.carousel}>
      <div
        onClick={() => {
          carosel("leftArrow");
        }}
        className={s.navLeft}
      >
        <span>&#8592;</span>
      </div>
      <div
        onClick={() => {
          carosel("rightArrow");
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
            <Link key={product.id} to={`/products/${product.id}`}>
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

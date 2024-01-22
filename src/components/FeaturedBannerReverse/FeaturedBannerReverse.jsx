import { useInView } from 'react-intersection-observer';
import ActionButton from '../ActionButton';
import bannerImage from '../../img/banner/banner2.jpg';

const FeaturedBannerReverse = () => {

  const animationOptions = { triggerOnce: true, rootMargin: "-100px 0px", };
  const { ref: leftPartRef, inView: leftPartIsVisible } = useInView(animationOptions);
  const { ref: rightPartRef, inView: rightPartIsVisible } = useInView(animationOptions);

  return (

    <section id="banner" className="featured-banner-section">
      <div className="container">
        <div className="featured-banner-container">
          <div ref={leftPartRef} className={leftPartIsVisible? "featured-left-animated-reverse" : "featured-left"}>
            <img
              src={bannerImage}
              alt=""
              className="banner-img"
            />
          </div>
          <div ref={rightPartRef} className={rightPartIsVisible? "featured-right-animated-reverse" : "featured-right"}>
            <h2 className="banner-title">Comfortable & Elegante Living</h2>
            <p className="featured-desc">Products are all made to standard sizes so
              that you can mix and match them freely.
            </p>
            <ActionButton text="SOPE NOW" link="/categories/All" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBannerReverse;

// import ActionButton from '../ActionButton';
import bannerImage from '../../img/banner/banner2.jpg';

const FeaturedBannerReverse = () => {
  return (
    <section id="banner" className="featured-banner-section">
      <div className="container">
        <div className="featured-banner-container">
          <div className="featured-right">
            <img
              src={bannerImage}
              alt=""
              className="banner-img"
            />
          </div>
          <div className="featured-left">
            <h2 className="banner-title">Comfortable & Elegante Living</h2>
                <p className="featured-desc">Products are all made to standard sizes so
                    that you can mix and match them freely.
                </p>
            {/* <ActionButton text="SOPE NOW" link="/category/all" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBannerReverse;

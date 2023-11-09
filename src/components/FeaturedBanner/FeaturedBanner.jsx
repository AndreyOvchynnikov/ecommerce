import ActionButton from '../ActionButton';
import bannerImage from '../../img/banner/banner1.jpg';

const FeaturedBanner = () => {
  return (
    <section id="banner" className="featured-banner-section">
      <div className="container">
        <div className="featured-banner-container">
          <div className="featured-left">
            <h2 className="banner-title">Creative harmonious living</h2>
                <p className="featured-desc">Products are all made to standard sizes so
                    that you can mix and match them freely.
                </p>
            <ActionButton text="SOPE NOW" link="/category/furniture" />
          </div>
          <div className="featured-right">
            <img
              src={bannerImage}
              alt=""
              className="banner-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
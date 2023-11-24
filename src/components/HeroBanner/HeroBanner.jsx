import { Link } from "react-router-dom";
import homeImage1 from '../../img/header/home-img-1.jpg';
import homeImage2 from '../../img/header/home-img-2.jpg';
import homeImage3 from '../../img/header/home-img-3.jpg';
import homeImage4 from '../../img/header/home-img-4.jpg';



const HeroBanner = () => {
  return (
    <>
      <div className="home-header">
        <div className="container">
          <div className="home-header-container">
            <div className="featured header-one">
                <Link to="/categories/furniture">
                    <div className="header-img-container">
                        <h2 className="featured-title">Life Comfortably</h2>
                    </div>
                    <img
                        className="header-img"
                        src={homeImage1}
                        alt="featured our best seller"
                    />
                </Link>
            </div>    
            <div className="featured header-two">
                <Link to="/categories/skin-care">
                    <div className="header-img-container">
                        <h2 className="featured-title">HW Skincare</h2>
                    </div>
                    <img
                        className="header-img headerimg-two"
                        src={homeImage2}
                        alt="featured our best seller"
                    />
                </Link>  
            </div>                                        
            <div className="featured header-four">
                <Link to="/categories/kitchen">
                    <div className="header-img-container">
                        <h2 className="featured-title">Kitchen & Dining</h2>
                    </div>
                    <img
                        className="header-img"
                        src={homeImage3}
                        alt="featured our best seller"
                    />
                </Link>               
            </div>     
            <div className="featured header-four-low">
                <Link to="/categories/electronic">
                    <div className="header-img-container">
                        <h2 className="featured-title">Home Electronics</h2>
                    </div>
                    <img
                        className="header-img"
                        src={homeImage4}
                        alt="featured our best seller"
                    />
                </Link>               
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
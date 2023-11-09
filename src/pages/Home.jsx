import HeroBanner from '../components/HeroBanner';
import CategoryProducts from '../components/CategoryProducts';
import FeaturedBanner from '../components/FeaturedBanner';
import TrendingProducts from '../components/TrendingProducts';
import FeaturedBannerReverse from '../components/FeaturedBannerReverse';
import { products } from '../components/AllData';


const Home = () => {

    const proudProducts = products.filter(({ isProud }) => isProud);
    const trendProducts = products.filter(({ isTrending }) => isTrending);

    return (
        <>
            <HeroBanner />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="container">
                <h2 className="section-title">Products we are proud of</h2>
            </div>
            <CategoryProducts products={proudProducts} />
            <FeaturedBanner />
            <TrendingProducts title="Trending Now" products={trendProducts} />
            <FeaturedBannerReverse />
             
        </>
        
    )
}

export default Home;
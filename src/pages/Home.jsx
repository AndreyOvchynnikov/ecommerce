import { useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import CategoryProducts from '../components/CategoryProducts';
import FeaturedBanner from '../components/FeaturedBanner';
import TrendingProducts from '../components/TrendingProducts';
import FeaturedBannerReverse from '../components/FeaturedBannerReverse';
import { useInView } from 'react-intersection-observer';
import { products } from '../components/AllData';


const Home = () => {

    const proudProducts = products.filter(({ isProud }) => isProud);
    const trendProducts = products.filter(({ isTrending }) => isTrending);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <>
            <HeroBanner />
            <div className="container">
                <h2 ref={ref} className={inView? "section-title-animated" : "section-title"}>Products we are proud of</h2>
            </div>
            <CategoryProducts products={proudProducts} />
            <FeaturedBanner />
            <TrendingProducts title="Trending Now" products={trendProducts} />
            <FeaturedBannerReverse />
        </>
        
    )
};

export default Home;
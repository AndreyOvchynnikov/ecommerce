import { useParams, useNavigate } from 'react-router';
import { useEffect } from 'react';
import Product from '../components/Product/Product';
import TrendingProducts from 'components/TrendingProducts';
import { useStateContext } from 'components/context/StateContext';


const ProductPage = () => {
    const { productId } = useParams();
    const productIdValue = Number(productId);
    const { trendingProducts } = useStateContext();
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-1)
    }
  
  return (
    <> 
      <a href="/" onClick={handleClick} style={{marginLeft: 40, textDecoration: "underline",}}><span>&lt;</span>Go back</a>
      <Product productId={productIdValue} />
      <TrendingProducts title="Last Viewed Products" products={trendingProducts} />
      </> 
    )
}

export default ProductPage;
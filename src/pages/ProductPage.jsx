import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { products } from 'components/AllData';
import Product from '../components/Product/Product';
import TrendingProducts from 'components/TrendingProducts';
import { useStateContext } from 'components/context/StateContext';


const ProductPage = () => {
  const { productId } = useParams();
  const productIdValue = Number(productId);
  const { trendingProducts } = useStateContext();
  const actualProduct = products.find(product => product.id === productIdValue);
  const { category } = actualProduct;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  
  return (
    <>
      <Link to={`/categories/${category}`}
        style={{ marginLeft: 40, textDecoration: "underline", }}>
        <span>&lt;</span>
        Go to {category.toLocaleUpperCase()}
      </Link>
      <Product productId={productIdValue} />
      <TrendingProducts title="Last Viewed Products" products={trendingProducts} />
    </>
  )
};

export default ProductPage;
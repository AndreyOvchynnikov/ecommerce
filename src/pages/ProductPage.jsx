import { useParams } from 'react-router';
import Product from '../components/Product/Product';


const ProductPage = () => {
    const { productId } = useParams();
    const productIdValue = Number(productId)
    
    
    
    return (
        <Product productId={productIdValue} />
    )
}

export default ProductPage;
import { products } from "../AllData";

const Product = ({ productId }) => {
    const actualProduct = products.find(product => product.id === productId);
    


    return (
        // <div></div>
        <p>{actualProduct.description}</p>
    )
}

export default Product;
import { Link } from "react-router-dom";


const CategoryProduct = ({ property, productDetails }) => {

  
  return (
    
      <div className={`category-product ${property}`}>
        <Link to={`products/${productDetails.id}`}>
                <div className="category-product-header">
          <div
            className={`category-product-img-wrapper ${
              property === "wide" ? "wide-img" : "normal-img"
            }`}
          >
            <img 
              src={productDetails.img}
              alt="a product"
              className="category-product-img"
            />
          </div>
          {property === "wide" && (
            <>
              <div className="wide-right-container">
                <div className="wide-title">{productDetails.wideCardTitle}</div>
                <button className="actionBtn">VIEW MORE</button>
              </div>
            </>
          )}
        </div>
        {property !== "wide" && (
          <>
            <div className="category-product-details">
              <div className="category-product-title">
                <span>{productDetails.description}</span>
              </div>
              <div className="category-product-price">
                {productDetails.price}$
              </div>
            </div>
          </>
        )}
          </Link>
        
      </div>
  );
};

export default CategoryProduct;
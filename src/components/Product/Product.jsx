import { useEffect, useState } from "react";
import { useStateContext } from "components/context/StateContext";
import toast, { Toaster } from "react-hot-toast";
import { products } from "../AllData";

const Product = ({ productId }) => {
  const actualProduct = products.find(product => product.id === productId);
  const [mainImage, setMainImage] = useState(actualProduct.img);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useStateContext();

  const incQuantity = () => setQuantity(quantity + 1);
  const decQuantity = () => {
    if (quantity === 1) {
      return;
    };
    setQuantity(quantity - 1);
  };
  const addToCartClick = (actualProduct, quantity) => {
    addToCart(actualProduct, quantity);
    toast.success("Product added to your cart!")
  }
  useEffect(() => {
    setMainImage(actualProduct.img);
    window.scrollTo(0, 0);
  }, [actualProduct]);
  
  return (
    <>
      <div><Toaster /></div>
      <section className="product-details">
        <div className="container">
          <div className="product-details-container">
            <div className="product-left">
              <div className="product-visualls">
                <div className="main-img-container">
                  <img
                    src={mainImage}
                    alt="Pop-up Toaster, white, 45cm"
                    className="main-img"
                  />
                </div>
                <div className="all-imgs-container">
                  <button className="img-container" onClick={() => setMainImage(actualProduct.img)}>
                    <img src={actualProduct.img} className="an-img" alt="top view" />
                  </button>
                  <button className="img-container" onClick={() => setMainImage(actualProduct.otherImgs[0])}>
                    <img src={actualProduct.otherImgs[0]} className="an-img" alt="top view" />
                  </button>
                  <button className="img-container" onClick={() => setMainImage(actualProduct.otherImgs[1])}>
                    <img src={actualProduct.otherImgs[1]} className="an-img" alt="top view" />
                  </button>
                </div>
              </div>
            </div>
            <div className="product-right">
              <div className="devider"></div>
              <div className="item-ids">
                <div className="item-title">{actualProduct.description}</div>
                <div className="item-code">Item Code: {actualProduct.id}</div>
              </div>
              <div className="product-right-details">
                <div className="item-desc">{actualProduct.specs}</div>
                <div className="item-mid">
                  <span className="item-mid-title">Quantity:</span>
                  <div className="quantity">
                    <button
                      onClick={decQuantity}
                      className="minus qnt-changer">
                      <span>&#8722;</span>
                    </button>
                    <div className="item-qty">{quantity}</div>
                    <button
                      onClick={incQuantity}
                      className="plus qnt-changer">
                      <span>&#43;</span>
                    </button>
                  </div>
                  <div className="item-price">
                    {Number(actualProduct.price * quantity).toFixed(2)}$
                  </div>
                </div>
                <div className="item-footer">
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCartClick(actualProduct, quantity)}
                  >
                    ADD TO CART
                  </button>
                  <button
                    className="buy-now-btn"
                  >
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-specs">
            <div className="spec">
              <div className="spec-title">Texture:</div>
              <div className="spec-desc">{actualProduct.texture}</div>
            </div>
            <div className="spec">
              <div className="spec-title">Weight:</div>
              <div className="spec-desc">{actualProduct.weight}</div>
            </div>
            <div className="spec">
              <div className="spec-title">Size:</div>
              <div className="spec-desc">{actualProduct.size}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
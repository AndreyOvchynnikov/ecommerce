import emptyCartImage from '../../img/cart/empty-cart.png';
import { useStateContext } from 'components/context/StateContext';

const Cart = () => {
    const { toggleCart, cartItems, removeFromCart, addToCart, totalPrice } = useStateContext();
    
    
    return (
        <>
        <div className="opac-bg">
               <div className="slide-cart-container">
            {cartItems.length > 0 ? (
              <>
                <div className="cart-header">
                  <div className="slide-cart-title">
                    <h3>
                      Your Shopping Cart  (
                      {cartItems.length === 1
                        ? `one item`
                        : `${cartItems.length} items`}
                      )
                    </h3>
                  </div>
                  <div
                    className="cart-close"
                    onClick={() => {
                      toggleCart();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                        fill="rgba(0,0,0,1)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="cart-body">
                  {cartItems.map((cartItem, i) => (
                    <div key={i} className="cart-item">
                      <div className="cart-item-left">
                        <img
                          src={cartItem.img}
                          alt="product img"
                          className="cart-item-img"
                          layout="fill"
                        />
                      </div>
                      <div className="cart-item-mid">
                        <h4 className="cart-item-title">{cartItem.description}</h4>
                        <span className="cart-item-code">{cartItem.id}</span>
                        <div className="gnt-changer-container">
                          <div
                            className="cart-qnt-changer qnt-minus"
                            onClick={() => {
                              addToCart(cartItem, -1);
                            }}
                          >
                            <span>&#8722;</span>
                          </div>
                          <div className="cart-qnt">
                            {cartItem.quantity}
                          </div>
                          <div
                            className="cart-qnt-changer qnt-plus"
                            onClick={() => {
                              addToCart(cartItem, 1);
                            }}
                          >
                            <span>&#43;</span>
                          </div>
                        </div>
                      </div>
                      <div className="cart-item-right">
                        <div className="cart-item-price">
                          {Number(cartItem.price * cartItem.quantity).toFixed(2)}$
                        </div>
                        <div
                          className="cart-item-remove"
                          onClick={() => {
                            removeFromCart(cartItem);
                          }}
                        >
                          <span>&#10006;</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-footer">
                  <div className="cart-footer-title">Subtotal</div>
                  <div className="subtotal-container">
                    <span className="subtotal">{totalPrice} $</span>
                      <button className="add-to-cart-btn">
                        Go to Checkout
                      </button>  
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="cart-header">
                  <div className="slide-cart-title">
                    <h2>
                      Your Shopping Cart is Empty
                    </h2>
                  </div>
                  <div
                    className="cart-close"
                    onClick={() => {
                      toggleCart();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                        fill="rgba(0,0,0,1)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="cart-empty">
                  <img
                    src={emptyCartImage}
                    alt="Empty Cart"
                    width="150px"
                    height="150px"
                  />
                  <div>Your cart is empty</div>
                  <br />
                  <button className="checkout" onClick={() => toggleCart()}>
                    Keep Browsing
                  </button>
                </div>
              </>)}
                </div> 
        </div>      
    </>
  );
};

export default Cart;
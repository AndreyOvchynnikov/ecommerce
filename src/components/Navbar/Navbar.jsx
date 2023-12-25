import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useStateContext } from "components/context/StateContext";
import Cart from "components/Cart";
import logo from '../../img/logo.png';

const Navbar = () => {
  const navbarContainer = useRef();
  const { showCart, toggleCart, totalQuantities } = useStateContext();
  const [showBurgerMenu, setshowBurgerMenu] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        navbarContainer.current.style.height = "70px";
      } else {
        navbarContainer.current.style.height = "120px";
      }
    });
  }, []);


  return (
    <>
      {showCart && <Cart />}

      <nav id="navbar" className="navbar">
        <div className="container">
          <div ref={navbarContainer} className="navbar-container">
            <div className="navbar-logo">
              {" "}
              <Link to="/">
                <div className="logo-container">
                  <img
                    className="logo-img"
                    src={logo}
                    alt="logo"
                  />
                </div>
              </Link>
            </div>
            <div className="nav-items">
              <div className="nav-links nav-items">
                <NavLink to="/categories/All">
                  <span className="nav-item">CATEGORIES</span>
                </NavLink>
                <NavLink to="/categories/lamp">
                  <span className="nav-item">LAMPS</span>
                </NavLink>
                <NavLink to="/categories/furniture">
                  <span className="nav-item">FURNITURE</span>
                </NavLink>
              </div>

              <span
                onClick={() => {
                  toggleCart();
                }}
                className="cart-container"
              >
                <span className="cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                </span>
                {totalQuantities > 0 && (
                  <span className="cart-products">{totalQuantities}</span>
                )}
              </span>
              <div
                className="burger-menu"
                onClick={() => {
                  setshowBurgerMenu(!showBurgerMenu);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
                </svg>
              </div>
              {showBurgerMenu && <div className="menu-container">
                <div
                  className="close-menu"
                  onClick={() => {
                    setshowBurgerMenu(!showBurgerMenu);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                  </svg>
                </div>
                <div className="menu">
                  <Link to="/categories/All" onClick={() => setshowBurgerMenu(!showBurgerMenu)}>
                    <span className="nav-item">CATEGORIES</span>
                  </Link>
                  <Link to="/categories/lamp" onClick={() => setshowBurgerMenu(!showBurgerMenu)}>
                    <span className="nav-item">LAMPS</span>
                  </Link>
                  <Link to="/categories/furniture" onClick={() => setshowBurgerMenu(!showBurgerMenu)}>
                    <span className="nav-item">FURNITURE</span>
                  </Link>
                </div>
              </div>}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

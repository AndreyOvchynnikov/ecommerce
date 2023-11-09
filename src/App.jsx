import { Route, Routes } from "react-router-dom";
import { StateContext } from "./components/context/StateContext";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import "./styles/globalStyles.css";

function App() {
  // const [cartItem, setCartItem] = useState([]);

  // const addToCart = (item) => {
  //   setCartItem([...cartItem, item]);
  // };

  // local storage
  // useEffect(() => {
  //   const json = localStorage.getItem("cartItem");
  //   const savedCart = JSON.parse(json);
  //   if (savedCart) {
  //     setCartItem(savedCart);
  //   }
  // }, []);

  // useEffect(() => {
  //   const json = JSON.stringify(cartItem);
  //   localStorage.setItem("cartItem", json);
  // }, [cartItem]);

  return (
    <StateContext>
        <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
          <Route path="categories/:category" element={<Categories />} />
          <Route path="categories/:category/products/:productId" element={<ProductPage />} />
        <Route path="products/:productId" element={<ProductPage />} />
      </Route>
    </Routes>
    </StateContext>
    
  )
}

export default App;

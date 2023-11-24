import { Route, Routes } from "react-router-dom";
import { StateContext } from "./components/context/StateContext";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import "./styles/globalStyles.css";

function App() {

  return (
    <StateContext>
        <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="categories/:category" element={<Categories />} />
        <Route path="products/:productId" element={<ProductPage />} />
      </Route>
    </Routes>
    </StateContext>
    
  )
}

export default App;

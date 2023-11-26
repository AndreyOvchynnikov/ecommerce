import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { StateContext } from "./components/context/StateContext";

const SharedLayout = lazy(() => import("./components/SharedLayout/SharedLayout"));
const Categories = lazy(() => import("./pages/Categories"));
const Home = lazy(() => import("./pages/Home"));
const ProductPage = lazy(() => import("./pages/ProductPage"));

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

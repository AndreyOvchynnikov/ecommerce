import { Link, useParams } from "react-router-dom";
import CategoryProduct from '../components/CategoryProduct/CategoryProduct';
import { products } from "../components/AllData";
import { useEffect, useState } from "react";



const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { category } = useParams();
  
  useEffect(() => {
    setSelectedCategory(category)
  }, [category])
 
    const selectCategories = products.reduce((acc, { category }) => {
        if (acc.includes(category)) {
            return acc;
        }
        return [...acc, category]
    }, [])
    
    const filteredProducts = selectedCategory === "All" ?
        [...products] : products.filter(product => product.category === selectedCategory);
        
    return (
    <>
      <div className="container">
        <div className="category-header">
          <div className="category-header-left">
            <Link to="/">
                <div className="category-header-previous">
                <span>&#60;</span>Home
              </div>
            </Link>
          </div>
          <div className="category-header-center">
            <h2 className="category-title">{selectedCategory.toUpperCase()}</h2>
          </div>
          <div className="category-header-right">
            <select
              defaultValue=""
                onChange={(e) => setSelectedCategory(e.target.value)}
              name="category"
              id="select-category"
            >
              <option value="All">All</option>
              {selectCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="category-products">      
            {filteredProducts.map((product) => (
                <CategoryProduct
                  key={product.id}
                  property={product.isWide ? "wide" : "normal"}
                  productDetails={product} />
                ) 
              )
            } 
        </div>
      </div>
    </>
  );
};


export default Categories;
import CategoryProduct from "../CategoryProduct/CategoryProduct";

const CategoryProducts = ({ products }) => {


  return (
    <>
      <div className="container">
        <div className="category-products">
          {products.map((product) => (
            <CategoryProduct
              key={product.id}
              property={product.isWide ? "wide" : "normal"}
              productDetails={product}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
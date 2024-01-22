import Carousel from "../Carousel/Carousel";

const TrendingProducts = ({ title, products }) => {
  return (
    <>
      <section className="trending">
        <div className="container">
          <h2 style={{marginBottom: "20px"}}>{title}</h2>
          <Carousel carouselProducts={products} />
        </div>
      </section>
    </>
  );
};

export default TrendingProducts;
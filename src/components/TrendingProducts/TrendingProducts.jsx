import Carousel from "../Carousel/Carousel";

const TrendingProducts = ({ title, products }) => {
  return (
    <>
      <section className="trending">
        <div className="container">
          <h2>{title}</h2>
          <br />
          <Carousel carouselProducts={products} />
        </div>
      </section>
    </>
  );
};

export default TrendingProducts;
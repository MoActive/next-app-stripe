const ProductCard = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        const { name, price } = product;
        return (
          <div>
            <h2>{name}</h2>
            <p>{price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;

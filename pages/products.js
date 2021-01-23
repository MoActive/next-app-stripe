import ProductCard from "../components/modules/product-card";

const Products = () => {
  const products = [
    { name: 'Ike 2', price: '300' },
    { name: 'Ike 4', price: '250' },
  ];

  return (
    <div>
      <ProductCard products={products} />
    </div>
  );
};

export default Products;

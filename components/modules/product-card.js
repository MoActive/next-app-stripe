const ProductCard = ({ title, image, price }) => {
  return (
    <div className="columns">
      <div className="column">
        <h2>{title}</h2>
        <p>{price}</p>
        <figure className='image'>
          <img src={image?.fields.file.url} />
        </figure>
      </div>
      <div className="column">
        <p>dawdaw</p>
      </div>
    </div>
  );
};

export default ProductCard;

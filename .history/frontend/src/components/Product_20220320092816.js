import { Link } from 'react-router-dom';

function Product(props) {
  const { product } = props;
  return (
    <Card key={product.slug}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className="card-img-top" />
      </Link>
      <card.Body
      <div className="product-info">
        <Link to={`/product/${product.slug}`}>
          <p>{product.name}</p>
        </Link>
        <p>
          <strong>shs.{product.price}</strong>
        </p>
        <button>Add to cart</button>
      </div>
    </Card>
  );
}

export default Product;

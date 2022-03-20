import { Link } from 'react-router-dom';

function Product(props) {
  const { product } = props;
  return (
    <Card key={product.slug}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className="card-img-top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>shs.{product.price}</Card.Text>
        
      </Card.Body>
      <div className="product-info">
        <p>
          <strong>shs.{product.price}</strong>
        </p>
        <button>Add to cart</button>
      </div>
    </Card>
  );
}

export default Product;

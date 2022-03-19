import data from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <img src={product.image} alt={product.name} />
              <div>
              <p>{product.name}</p>
              <p>shs.{product.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

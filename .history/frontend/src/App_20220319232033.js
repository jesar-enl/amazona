import data from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div>
        {data.products.map((product) => (
          <div key={product.slug}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>shs.{product.price}</p>
          </div>
        ))}
        
      </main>
    </div>
  );
}

export default App;

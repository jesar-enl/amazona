import data from "./data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        {
          data.products.map(product =)
        }
      </main>
    </div>
  );
}

export default App;

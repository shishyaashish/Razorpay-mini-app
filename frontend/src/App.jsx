import Product from './components/Product';
import productData from './components/data';
import './styles/Product.css'; // make sure it's imported here too

function App() {
  return (
    <div className="productGrid"> {/* 👈 Wrap all Product in a grid */}
      {productData.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
export default App;

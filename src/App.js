import Products from "./components/Products/Products";
import CartProduct from "./components/Cart/CartProduct";

function App() {
  const productsArr = [{
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }];
  return (
    <div>
      <h2>The Generics</h2>
      <CartProduct />
      <Products title={productsArr[0].title} price={productsArr[0].price} imageUrl={productsArr[0].imageUrl} />
      <Products title={productsArr[1].title} price={productsArr[1].price} imageUrl={productsArr[1].imageUrl} />
      <Products title={productsArr[2].title} price={productsArr[2].price} imageUrl={productsArr[2].imageUrl} />
      <Products title={productsArr[3].title} price={productsArr[3].price} imageUrl={productsArr[3].imageUrl} />
    </div>
  );
}

export default App;

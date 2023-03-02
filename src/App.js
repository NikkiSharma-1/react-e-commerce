import Products from "./components/Products/Products";
import Header from "./components/Header";
//import About from "./Pages/About"
import Cart from "./components/Cart/Cart";
//import Home from "./Pages/Home";
//import ContactUs from "./Pages/ContactUs";
//import {  Route } from "react-router-dom";

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

    const submitUserDetails = async (details) => {
      const response = await fetch(
        "https://react-http-44f2c-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Context-Type": "application/json",
          },
        }
      );
      const data = await response.json();
    console.log(data);
    

    
  return (
    <div>
      <Header />
      <Cart />
      <Products title={productsArr[0].title} price={productsArr[0].price} imageUrl={productsArr[0].imageUrl} />
      <Products title={productsArr[1].title} price={productsArr[1].price} imageUrl={productsArr[1].imageUrl} />
      <Products title={productsArr[2].title} price={productsArr[2].price} imageUrl={productsArr[2].imageUrl} />
      <Products title={productsArr[3].title} price={productsArr[3].price} imageUrl={productsArr[3].imageUrl} />
      <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <ContactUs getUserDetails={submitUserDetails} />
          </Route>
    </div>
  );
    }
}
export default App;

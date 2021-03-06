// import HOC
import HomeLayoutHOC from "./HOC/home.hoc";
import RestaurantHOC from "./HOC/RestaurantHOC";
import CheckoutHOC from "./HOC/CheckoutHOC";

import { Route, Redirect } from "react-router-dom";

import Temp from "./components/temp";

// import components
import Home from "./Pages/Home";
import Overview from "./Pages/Restaurant/Overview";
import OrderOnline from "./Pages/Restaurant/OrderOnline";
import Reviews from "./Pages/Restaurant/Reviews";
import Menu from "./Pages/Restaurant/Menu";
import Photos from "./Pages/Restaurant/Photos";
import Checkout from "./Pages/Checkout";
import RedirectRestaurant from "./Pages/Restaurant/Redirect";

function App() {
  return (
    <div className="mb-40">
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <Route path="/restaurant/:id" exact component={RedirectRestaurant} />
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantHOC path="/restaurant/:id" exact component={Temp} />
      <RestaurantHOC
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantHOC
        path="/restaurant/:id/order-online"
        exact
        component={OrderOnline}
      />
      <RestaurantHOC path="/restaurant/:id/reviews" exact component={Reviews} />
      <RestaurantHOC path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantHOC path="/restaurant/:id/photos" exact component={Photos} />
      <CheckoutHOC path="/order/checkout" exact component={Checkout} />
    </div>
  );
}

export default App;

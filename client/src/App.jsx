// import HOC
import HomeLayoutHOC from "./HOC/home.hoc";
import RestaurantHOC from "./HOC/RestaurantHOC";
import { Route, Redirect } from "react-router";

import Temp from "./components/temp";

// import components
import Home from "./Pages/Home";
import Overview from "./Pages/Restaurant/Overview";

function App() {
  return (
    <div className="mb-40">
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <Route path="/restaurant/:id" exact>
        <Redirect to="/restaurant/:id/overview" />
      </Route>
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
        component={Temp}
      />
      <RestaurantHOC path="/restaurant/:id/reviews" exact component={Temp} />
      <RestaurantHOC path="/restaurant/:id/menu" exact component={Temp} />
      <RestaurantHOC path="/restaurant/:id/photos" exact component={Temp} />
    </div>
  );
}

export default App;

// import HOC
import HomeLayoutHOC from "./HOC/home.hoc";
import RestaurantHOC from "./HOC/RestaurantHOC";
import { Route, Redirect } from "react-router";

import Temp from "./components/temp";

// import components
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantHOC path="/restaurant/:id" exact component={Temp} />
    </>
  );
}

export default App;

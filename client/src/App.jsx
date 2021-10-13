// import HOC
import HomeLayoutHOC from "./HOC/home.hoc";

// import components
// import Temp from "./components/temp";
import Master from "./components/master";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/:type" exact component={Master} />
      <HomeLayoutHOC path="/" exact component={Master} />
    </>
  );
}

export default App;

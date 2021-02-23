import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Signin from "./components/Signin/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar />
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/checkout'>
            <Checkout />
          </Route>

          <Route path='/signin'>
            <Signin />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

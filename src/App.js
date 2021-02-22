import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
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
        <h1>Hello Eats Me</h1>
      </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;

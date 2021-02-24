import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Signin from "./components/Signin/Signin";
import Payment from "./components/Payment/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";

const App = () => {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log('User: ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

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

          <Route path='/payment'>
            <Payment />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

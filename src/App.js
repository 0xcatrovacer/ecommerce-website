import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Signin from "./components/Signin/Signin";
import Payment from "./components/Payment/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IOSVQH8HmqqgFUEE3KzwWon4UHp7TXUYUw6E9iVvt38UzaO0V5BNADDm48719AcGq3eg54G6ioofzyLKWXFaoDK00KVi6utPo"
)

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
        <Switch>

          <Route exact path='/'>
            <Navbar />
            <Home />
          </Route>

          <Route path='/checkout'>
            <Navbar />
            <Checkout />
          </Route>

          <Route path='/signin'>
            <Signin />
          </Route>

          <Route path='/payment'>
            <Navbar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

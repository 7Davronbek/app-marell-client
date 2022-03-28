import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import Header from "./components/Header";
import Man from "./components/Man";
import Main from "./components/Main";
import Woman from "./components/Woman";
import PrivateRoom from "./components/PrivateRoom";
import Partners from "./components/Partners";
import Support from "./components/Support";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";
import Patrnership from "./components/Patrnership";
import ReturnBasis from "./components/ReturnBasis";
import Delivery from "./components/Delivery";
import Baskets from "./components/Baskets";
import ScrollToTop from "./components/ScrollToTop";

import AdminMain from "./components/admin/AdminMain";
import SetProfile from "./components/admin/SetProfile";
import Career from "./components/admin/Career";
import PlasticCard from "./components/admin/PlasticCard";
import FavoriteBrands from "./components/admin/FavoriteBrands";
import Faq from "./components/admin/Faq";
import ActiveOrders from "./components/admin/ActiveOrders";
import ShoppingHistory from "./components/admin/ShoppingHistory";
import Checkout from "./components/Checkout";
import EyeAnimation from "./components/EyeAnimation";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.clear();
    }, 1000);
  }, []);

  window.addEventListener("load", () => {
    setIsLoading(false);
  });

  return (
    <>
      {isLoading ? (
        <div className="loader">
        <div className={`eye cursor text-center `}>
            <EyeAnimation />
        </div>
        </div>
      ) : (
        ""
      )}

      <Router>
        <ScrollToTop />

        <Switch>
          {/* <Route exact path="/" component={Header} /> */}
          <Route exact path="/" component={Main} />
          <Route exact path="/basket" component={Baskets} />
          <Route exact path="/basket/checkout" component={Checkout} />
          <Route exact path="/man" component={Man} />
          <Route exact path="/woman" component={Woman} />
          <Route exact path="/partners" component={Partners} />

          <Route exact path="/support" component={Support} />
          <Route exact path="/support/partnership" component={Patrnership} />
          <Route exact path="/support/return-basis" component={ReturnBasis} />
          <Route
            exact
            path="/support/delivery-and-payment"
            component={Delivery}
          />

          <Route exact path="/private-office" component={PrivateRoom} />
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/sign-in" component={SignIn} />

          <Route exact path="/marell-admin" component={AdminMain} />

          <Route
            exact
            path="/marell-admin/active-orders"
            component={ActiveOrders}
          />
          <Route exact path="/marell-admin/career" component={Career} />
          <Route
            exact
            path="/marell-admin/balance-operations"
            component={PlasticCard}
          />
          <Route
            exact
            path="/marell-admin/set-profile"
            component={SetProfile}
          />
          <Route
            exact
            path="/marell-admin/favorite-brands"
            component={FavoriteBrands}
          />
          <Route exact path="/marell-admin/faq" component={Faq} />
          <Route
            exact
            path="/marell-admin/shoping-history"
            component={ShoppingHistory}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;

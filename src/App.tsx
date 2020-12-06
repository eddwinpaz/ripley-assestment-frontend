import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./index.css";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/product/:productId" component={ProductDetail} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

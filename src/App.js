import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Serve from "./components/Serve/Serve";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterPage from "./components/Footer/Footer";
import Blogs from "./components/Blogs/Blogs";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <About></About>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/serve">
            <Serve></Serve>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <FooterPage></FooterPage>
      </Router>
    </div>
  );
}

export default App;

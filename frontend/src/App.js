import Header from "./Components/Navbar/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Cricket from "./Pages/Cricket/Cricket";
import Football from "./Pages/Football/Football";
import Footer from "./Components/Navbar/Footer";
import Teams from "./Pages/Cricket/Teams";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/Cricket" component={Cricket}></Route>
            <Route exact path="/Football" component={Football}></Route>
            <Route exact path="/Cricket/Teams" component={Teams}></Route>
            {/*<Route exact path="/Getnews" component={Getnews}></Route> */}
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;

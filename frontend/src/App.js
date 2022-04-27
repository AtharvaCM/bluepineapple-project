import Header from './Components/Navbar/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage'
import Cricket from './Pages/Cricket/Cricket';


function App() {
  return (
    <>
    
      <Router>
        <div>
          <Header></Header>
          <Switch>
             <Route exact path="/" component={LandingPage}></Route>
             <Route exact path="/Cricket" component={Cricket}></Route>
            {/*<Route exact path="/Getnews" component={Getnews}></Route> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

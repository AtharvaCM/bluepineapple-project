import Header from './Components/Navbar/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage'
import Cricket from './Pages/Cricket/Cricket';
import Football from './Pages/Football/Football';
import Footer from './Components/Navbar/Footer';
//import Teams from './Pages/Cricket/Teams';
import Helmet from 'react-helmet'
import Gallery from './Pages/Cricket/Gallery';
import News from './Pages/Cricket/News';
import PlayersRanking from './Pages/Cricket/PlayersRanking'
import MensTeam from './Pages/Cricket/MensTeam'
import WomensTeam from './Pages/Cricket/WomensTeam';
//import '../src/Resources/Styles/demo.css'


function App() {
  return (
    <>
      <Helmet>
        <style>{'body { background-color: #2D2D39; }'}</style>
      </Helmet>

      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/Cricket" component={Cricket}></Route>
            <Route exact path="/Football" component={Football}></Route>
            {/* <Route exact path="/Cricket/Teams" component={MensTeam}></Route> */}
            <Route exact path="/Cricket/Gallery" component={Gallery}></Route>
            <Route exact path="/Cricket/News" component={News}></Route>
            <Route exact path="/Cricket/Ranking" component={PlayersRanking}></Route>
            <Route exact path="/Cricket/Team/Men" component={MensTeam}></Route>
            <Route exact path="/Cricket/Team/Women" component={WomensTeam}></Route>
            
            {/*<Route exact path="/Getnews" component={Getnews}></Route> */}
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;

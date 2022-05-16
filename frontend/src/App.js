import Header from "./Components/Navbar/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Cricket from "./Pages/Cricket/Cricket";
import Football from "./Pages/Football/Football";
//import Footer from "./Components/Navbar/Footer";
//import Teams from './Pages/Cricket/Teams';
import Gallery from "./Pages/Cricket/Gallery";
import News from "./Pages/Cricket/News";
//import PlayersRanking from './Pages/Cricket/PlayersRanking'
import MensTeam from "./Pages/Cricket/MensTeam";
import WomensTeam from "./Pages/Cricket/WomensTeam";
import CricRankBatting from "./Pages/Cricket/Ranking/CricRankBatting";
import CricRankTeam from "./Pages/Cricket/Ranking/CricRankTeam";
import CricRankBowling from "./Pages/Cricket/Ranking/CricRankBowling";
import CricPlayerInfo from "./Pages/Cricket/CricPlayerInfo";
import TeamInfo from "./Pages/Cricket/TeamInfo";
import LiveScores from "./Pages/Cricket/LiveScores";
import Series from "./Pages/Cricket/Series";
import PlayersRanking from "./Pages/Cricket/PlayersRanking";
import CurrentMatches from "./Pages/Football/CurrentMatches";
import TeamList from "./Pages/Football/TeamList";
import DetailScore from "./Pages/Football/DetailScore";
import Gallery1 from "./Pages/Football/Gallery";



function App() {
  return (
    <>
      <Router>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/Cricket" component={Cricket}></Route>
            <Route exact path="/Cricket/Gallery" component={Gallery}></Route>
            <Route exact path="/Cricket/News" component={News}></Route>
            <Route exact path="/Cricket/Ranking/Batting" component={CricRankBatting}></Route>
            <Route exact path="/Cricket/Ranking/Bowling" component={CricRankBowling}></Route>
            <Route exact path="/Cricket/Ranking/Team" component={CricRankTeam}></Route>
            <Route exact path="/Cricket/players/Playernfo" component={CricPlayerInfo}></Route>
            <Route exact path="/Cricket/Ranking" component={PlayersRanking}></Route>
            <Route exact path="/Cricket/Team/Men" component={MensTeam}></Route>
            <Route exact path="/Cricket/Team/Women" component={WomensTeam}></Route>
            <Route exact path="/Cricket/Team/TeamInfo" component={TeamInfo}></Route>
            <Route exact path="/Cricket/LiveScore" component={LiveScores}></Route>
            <Route exact path="/Cricket/Series" component={Series}></Route>
            <Route exact path="/Football" component={Football}></Route>
            <Route exact path="/football/Scores" component={CurrentMatches}></Route>
            <Route exact path="/football/Teams" component={TeamList}></Route>
            <Route exact path="/football/Scores/MatchSummary" component={DetailScore}></Route>
            <Route exact path="/football/Gallery" component={Gallery1}></Route>
            
          </Switch>
          {/* <Footer></Footer> */}
        </div>
      </Router>
    </>
  );
}

export default App;

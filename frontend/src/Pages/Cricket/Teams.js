import { React } from 'react'
import CricSubNavBar from '../../Components/Cricket/CricSubNavBar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeamSubNavBar from '../../Components/Cricket/TeamSubNavBar'
import MensTeam from './MensTeam';
import WomensTeam from './WomensTeam';



function Teams() {



  return (
    <>

      <Router>
        <div>
          <CricSubNavBar></CricSubNavBar>
          <TeamSubNavBar></TeamSubNavBar>

          <Switch>
            <Route exact path="/Cricket/Teams" component={MensTeam} ></Route>
            <Route exact path="/Cricket/Team/Women" component={WomensTeam}></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Teams
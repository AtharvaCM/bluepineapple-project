import React from "react";
import FootballMainContent from "./FootballMainContent";
import FootballSubNavBar from "./FootballSubNavBar";
import LeagueList from './LeagueList'
import Gallery from './Gallery'



import { Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiLiveFill, RiNewspaperFill } from "react-icons/ri";
import { AiFillThunderbolt } from "react-icons/ai";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ranking from "./Ranking";


function Football() {
  return (
    <>
    
    <Router>
    <FootballSubNavBar></FootballSubNavBar>
          <Switch>
            <Route exact path='/' component={Gallery}></Route>
            <Route  exact path='/Football/LeagueList' component={LeagueList}></Route>
            <Route exact path='/Football/Ranking' component={Ranking}></Route>
          </Switch>
        </Router>
      
      
      {/* <FootballMainContent></FootballMainContent> */}


        
    </>
  );
}

export default Football;

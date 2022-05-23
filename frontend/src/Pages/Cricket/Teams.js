import { React } from "react";
import CricSubNavBar from "../../Components/Navbar/CricSubNavBar";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TeamSubNavBar from "../../Components/Cricket/TeamSubNavBar";
import MensTeam from "./MensTeam";
//import MensTeam from './MensTeam';
//import WomensTeam from './WomensTeam';

function Teams() {
  return (
    <>
      <div>
        <CricSubNavBar></CricSubNavBar>
        <TeamSubNavBar></TeamSubNavBar>
        <MensTeam></MensTeam>
      </div>
      
    </>
  );
}

export default Teams;

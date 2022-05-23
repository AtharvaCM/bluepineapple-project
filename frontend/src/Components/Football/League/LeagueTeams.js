import {React,useState,useEffect} from 'react'
import LeagueWiseTeams from '../../../Api/footballApi/LeagueWiseTeams';

function LeagueTeams({e}) {

// const [teams, setteams] = useState([])

console.log(e.location.state.e.league_key);

//useEffect(() => {
  // let leagueKey = e.teams.location.state.e.league_key;
  //  if (leagueKey === '177') {
  //     LeagueWiseTeams('177').then((data) => {
  //       setteams(data);
  //     })
  //   }
    // if (leagueName === 'Premier League') {
    //   LeagueWiseTeams('Premier League').then((data) => {
    //     setleague(data.matches);
    //   })
    // }
  
    
  //}, [])
  
  
  //console.log('leagueteamse',teams);
  return (
    <div>LeagueTeams</div>
  )
}

export default LeagueTeams
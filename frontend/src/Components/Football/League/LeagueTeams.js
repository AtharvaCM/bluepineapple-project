import { React, useState, useEffect } from 'react'
import LeagueWiseTeams from '../../../Api/footballApi/LeagueWiseTeams';

function LeagueTeams({ e }) {

  const [teams, setteams] = useState(null)

  console.log(e.location.state.e.league_key);

  let league_key = e.location.state.e.league_key;


  useEffect(() => {

    if (league_key === '177') {
      LeagueWiseTeams('177').then((data) => {
        setteams(data);
      }).catch(err => console.log(err))
    }

    //     if (leagueKey === '423') {
    //       LeagueWiseTeams('423').then((data) => {
    //         setteams(data);
    //       }).catch(err=>console.log(err));
    //     }


  }, [])

console.log(teams);
  return (
    <div>LeagueTeams</div>
  )
}

export default LeagueTeams
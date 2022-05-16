import {React,useState,useEffect} from 'react'
import FootballSubNavBar from './FootballSubNavBar'
import FinishedMatches from '../../Api/footballApi/FinishedMatches'
//import LeagueWiseMatchesApi from '../../Api/footballApi/LeagueWiseMatchesApi'

function LeagueInfo(e) {

    const [data, setdata] = useState(null)
    const [league, setleague] = useState()
    
    useEffect(() => {
      FinishedMatches().then((data) => {
        setdata(data.matches);
        //console.log('matches by league:',data)
      })
    }, [])
    
    let leagueName = e.location.state.e.league_name;

    if(leagueName === "Premier League" && data !== null){
      const updatedMatches = data.filter((data) => {
        return data.league_name === leagueName;
      })
      //
      console.log(updatedMatches);
      setleague(updatedMatches);
      
    }
     
    console.log(league);
           

    

    
  return (
    <>
    <FootballSubNavBar></FootballSubNavBar>
    </>
  )
}

export default LeagueInfo
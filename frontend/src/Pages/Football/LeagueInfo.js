import { React, useState, useEffect } from 'react'
import FootballSubNavBar from './FootballSubNavBar'
import FinishedMatches from '../../Api/footballApi/FinishedMatches'
import LeagueWiseMatchesApi from '../../Api/footballApi/LeagueWiseMatchesApi'

function LeagueInfo(e) {

  const [data, setdata] = useState([])
  const [league, setleague] = useState('')

  useEffect(() => {
    FinishedMatches().then((data) => {
      setdata(data.matches);
      //console.log('matches by league:',data)
    })
  }, [])


  useEffect(() => {

    let leagueName = e.location.state.e.league_name;
    if(leagueName === 'Cup'){
      LeagueWiseMatchesApi('Cup - Round of 32').then((data)=>{
        setleague(data);
      })
    }
    //console.log(leagueName);

    LeagueWiseMatchesApi(leagueName).then((data)=>{
      setleague(data);
    })

  }, [])

  console.log(league);




  console.log('league', league);
  console.log('league_data', data);





  return (
    <>
      <FootballSubNavBar></FootballSubNavBar>
    </>
  )
}

export default LeagueInfo
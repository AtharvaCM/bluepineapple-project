import { React, useState} from 'react'
import FootballSubNavBar from './FootballSubNavBar'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Card } from 'react-bootstrap'
import LeagueSchedule from '../../Components/Football/League/LeagueSchedule'
import LeagueTeams from '../../Components/Football/League/LeagueTeams'

function LeagueInfo(e) {

  
  const [activeComponent, setactiveComponent] = useState('schedule')


  


  //console.log('league', league);





  return (
    <>
      <FootballSubNavBar></FootballSubNavBar>
      <Card>
        <Card.Header style={{ textAlign: 'center' }}><h5>{e.location.state.e.league_name}</h5></Card.Header>
        <Stack direction="row" spacing={2}>
        <Button variant="contained" color="success" onClick={()=>setactiveComponent('schedule')}>
         League Matches
        </Button>
        <Button variant="outlined" color="error" onClick={()=>setactiveComponent('matches')}>
          Teams
        </Button>
        </Stack>
      </Card>

      {

        activeComponent === 'schedule'?(<LeagueSchedule e={e}></LeagueSchedule>):activeComponent === 'matches'?(<LeagueTeams></LeagueTeams>):null
        
      }
    </>
  )
}

export default LeagueInfo
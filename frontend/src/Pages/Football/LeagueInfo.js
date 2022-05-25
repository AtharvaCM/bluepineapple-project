import { React, useState} from 'react'
import FootballSubNavBar from './FootballSubNavBar'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Card } from 'react-bootstrap'
import LeagueSchedule from '../../Components/Football/League/LeagueSchedule'
import LeagueTeams from '../../Components/Football/League/LeagueTeams'
import LeagueWisePointsTable from '../../Components/Football/League/LeagueWisePointsTable';

function LeagueInfo(e) {

  
  const [activeComponent, setactiveComponent] = useState('schedule')

  return (
    <>
      <FootballSubNavBar></FootballSubNavBar>
      <Card>
        <Card.Header style={{ textAlign: 'center',fontWeight:'bold',fontSize:'1.8rem'}}>The {e.location.state.e.league_name}</Card.Header>
        <Stack direction="row" spacing={2}>
        <Button variant="contained" color={activeComponent === 'schedule'?'success':'primary'} onClick={()=>setactiveComponent('schedule')}>
         League Matches
        </Button>
        <Button variant="contained" color={activeComponent === 'teams'?'success':'primary'} onClick={()=>setactiveComponent('teams')} >
        Teams
          </Button>
        <Button variant="contained" color={activeComponent === 'pointsTable'?'success':'primary'} onClick={()=>setactiveComponent('pointsTable')} >
          Points Table
        </Button>
        </Stack>
      </Card>

      {

        activeComponent === 'schedule'?(<LeagueSchedule e={e}></LeagueSchedule>):activeComponent === 'teams'?(<LeagueTeams e={e}></LeagueTeams>):activeComponent === 'pointsTable'?(<LeagueWisePointsTable e={e}></LeagueWisePointsTable>):null
        
      }
    </>
  )
}

export default LeagueInfo
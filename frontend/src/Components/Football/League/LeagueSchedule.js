import { React, useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Table from 'react-bootstrap/Table';
import { Col, Image, Row } from 'react-bootstrap/'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import LeagueWiseMatchesApi from '../../../Api/footballApi/LeagueWiseMatchesApi'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function LeagueSchedule({ e }) {
  const [league, setleague] = useState([])
  console.log(e.location.state.e.league_name)

  useEffect(() => {

    let leagueName = e.location.state.e.league_name;
    if (leagueName === 'Cup') {
      LeagueWiseMatchesApi('Cup - Round of 32').then((data) => {
        setleague(data.matches);
      })
    }
    if (leagueName === 'Premier League') {
      LeagueWiseMatchesApi('Premier League').then((data) => {
        setleague(data.matches);
      })
    }
    //console.log('scheduleLeague',league);
  }, [])


  console.log(league);

  return (
    <>
     
        <Table className='mt-2'>
          <tbody>
            <Row>
              <Col style={{textAlign:'center',fontSize:'1.5rem',fontWeight:'bold'}}>Match</Col>
              <Col style={{textAlign:'center',fontSize:'1.5rem',fontWeight:'bold'}}>Date / Time</Col>
              <Col style={{textAlign:'center',fontSize:'1.5rem',fontWeight:'bold'}}>Status</Col>
              <Col style={{textAlign:'center',fontSize:'1.5rem',fontWeight:'bold'}}>Final score</Col>
              <Col></Col>
            </Row>
          </tbody>
        </Table>

        {league.length && league.map((data, index) => {
          return (
            
             <>
             <Card>
               <Table>
                 <tbody>
                   <Row>
                     <Col style={{textAlign:'center',fontWeight:'bold',fontSize:'21px'}}>
                     {data.event_home_team} vs {data.event_away_team}
                     </Col>
                     <Col style={{textAlign:'center',fontSize:'21px'}}>{data.event_date} / {data.event_time} Hrs</Col>
                     <Col style={{textAlign:'center',fontSize:'21px'}}>{data.event_status === ''?'NA':data.event_status}</Col>
                     <Col style={{textAlign:'center',fontWeight:'bold',fontSize:'21px'}}>{data.event_ft_result === ''?'NA':data.event_ft_result}</Col>
                     <Col><Button>View Details</Button></Col>
                   </Row>
                 </tbody>
               </Table>
             </Card>
             </>
            
            // <tr key={index}>
            //   <td style={{ maxHeight: '80px', maxWidth: '80px' }}>
            //     <Image alt="img1" src={data.home_team_logo} roundedCircle style={{ maxHeight: '80px', maxWidth: '80px' }}></Image>
            //   </td>
            //   <td style={{fontWeight:'bold',textAlign:'center'}}>{data.event_home_team}</td>
            //   <td >Vs</td>
            //   <td style={{fontWeight:'bold',textAlign:'center'}}> {data.event_away_team}</td>
            //   <td ><Image alt="img1" src={data.away_team_logo} roundedCircle style={{ maxHeight: '80px', maxWidth: '80px' }}></Image></td>
            // </tr>
          )
        })

      }


    </>
  )
}

export default LeagueSchedule




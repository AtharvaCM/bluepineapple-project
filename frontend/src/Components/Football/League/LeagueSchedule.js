import { React, useState, useEffect } from 'react'

import Table from 'react-bootstrap/Table';
import { Col, Row,Container } from 'react-bootstrap'

import LeagueWiseMatchesApi from '../../../Api/footballApi/LeagueWiseMatchesApi'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function LeagueSchedule({ e }) {
  const [league, setleague] = useState([])


  let league_key = e.location.state.e.league_key;

  useEffect(() => {

    
    if (league_key === '423') {
      LeagueWiseMatchesApi('423').then((data) => {
        setleague(data.matches);
      })
    }
    if (league_key === '177') {
      LeagueWiseMatchesApi('177').then((data) => {
        setleague(data.matches);
      })
    }
  })

  return (
    <>
    <Card>
    <Container>
     <Card.Header>
        <Table className='mt-2' striped bordered>
            <Card >
            <Row >
              <Col style={{textAlign:'center',fontSize:'1.2rem',fontWeight:'bold'}}>Match</Col>
              <Col style={{textAlign:'center',fontSize:'1.2rem',fontWeight:'bold'}}>Date / Time</Col>
              <Col style={{textAlign:'center',fontSize:'1.2rem',fontWeight:'bold'}}>Status</Col>
              <Col style={{textAlign:'center',fontSize:'1.2rem',fontWeight:'bold'}}>Final score</Col>
              <Col></Col>
            </Row>
            </Card>
        </Table>
        </Card.Header>

        {league.length && league.map((data, index) => {
          return (
            
             <>
             <Card key={index}>
               <Table striped bordered hover>
                 <tbody>
                   <Row>
                     <Col style={{textAlign:'center',fontWeight:'bold',fontSize:'1.2rem'}} className="mt-4">
                     {data.event_home_team} vs {data.event_away_team}
                     </Col>
                     <Col style={{textAlign:'center',fontSize:'1.2rem'}} className="mt-4">{data.event_date} / {data.event_time} Hrs</Col>
                     <Col style={{textAlign:'center',fontSize:'1.2rem'}} className="mt-4">{data.event_status === ''?'NA':data.event_status}</Col>
                     <Col style={{textAlign:'center',fontWeight:'bold',fontSize:'1.2rem'}} className="mt-4">{data.event_ft_result === ''?'NA':data.event_ft_result}</Col>
                     <Col><Button style={{alignSelf:'center'}} className="mt-4">View Details</Button></Col>
                   </Row>
                 </tbody>
               </Table>
             </Card>
             </>
            
          )
        })

      }

</Container>
</Card>
    </>
  )
}

export default LeagueSchedule




import { React, useState, useEffect } from 'react'
import LeagueWiseTeams from '../../../Api/footballApi/LeagueWiseTeams';
import { Row, Col, Card } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'





function LeagueTeams({ e }) {

  const [teams, setteams] = useState([])

  console.log(e.location.state.e.league_key);

  let league_key = e.location.state.e.league_key;


  useEffect(() => {

    if (league_key === '177') {
      LeagueWiseTeams('177').then((data) => {
        setteams(data.teams);
      }).catch(err => console.log(err))
    }

    if (league_key === '423') {
      LeagueWiseTeams('423').then((data) => {
        setteams(data.teams);
      }).catch(err => console.log(err));
    }


  }, [])

  let history = useHistory();

  const clickHandler = (e)=>{
    //console.log(e);
    history.push({
      pathname: "/football/team/teamInfo",
      state: { data: e }, //passing prop to the component
    });
  }


  console.log(teams);
  return (
    <>
      <Card style={{backgroundColor:'#F7F7F7'}}>
        <Row md={4} className="g-4">
          {teams.length && teams.map((data, index) => {
            return (
              <>
                <Col key={index}>
                  <Card style={{ width: '18rem', height: '20rem',cursor:'pointer'}} className="mt-2" onClick={()=>clickHandler(data)}>
                    <Card.Img variant="top" src={data.team_logo} style={{ height: '10rem', width: '10rem', alignSelf: 'center' }} className="mt-2" />
                    <Card.Body>
                      <Card.Title style={{ textAlign: 'center', fontWeight: 'bold' }}>{data.team_name}</Card.Title>
                      <Card.Title>Coach : {data.coaches.length === 0 ? 'NA' : data.coaches[0].coach_name === "" ? 'NA' : data.coaches[0].coach_name}</Card.Title>


                    </Card.Body>
                  </Card>
                </Col>
              </>
            )
          })}
        </Row>
      </Card>



    </>
  )
}

export default LeagueTeams
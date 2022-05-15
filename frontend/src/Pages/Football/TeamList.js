import {React,useEffect,useState} from 'react'
import footBallTeamsApi from '../../Api/footballApi/FootballTeamsApi'
import {Card,Image,Col,Row, Container} from 'react-bootstrap'

function TeamList() {

    const [teamList, setteamList] = useState(null)
    //console.log("hello from football teams")

    useEffect(() => {
      footBallTeamsApi().then((data)=>{
          //console.log(data.teams.coaches);
          setteamList(data.teams)
      }).catch(err=>console.log(err));
    }, [])
    
    console.log(teamList)
    
    return (
      <>
      <Container>

      
        {teamList === null || teamList === undefined ? null : (
          <div className="container mt-2">
            <Row>
              {teamList.map((data, index) => {
                //console.log(data);
                return (
                  <Col key={index} sm="12" md="6">
                    <Card
                      style={{
                        backgroundColor: "white",
                        color: "black",
                        height: "95%",
                      }}
                      className="mb-2"
                    >
                      <Card.Body>
                        <Row>
                          <Col sm="12" md="5">
                            <Image
                              roundedCircle="true"
                              src={data.team_logo === null?'https://apiv2.allsportsapi.com/logo/4282_great-olympics.jpg':data.team_logo}
                              
                              height="150"
                              width="150"
                            ></Image>
                          </Col>
  
                          <Col  className=' my-auto'>
                            <Card.Text as="h5">
                              <b>Name :{data.team_name}</b>
                            </Card.Text>
                            <Card.Text>
                              <b>Coach Name : { data.coaches[0] == null || data.coaches === undefined || data.coaches[0].coach_name === ''?'N/A':data.coaches[0].coach_name}</b> 
                            </Card.Text>                            
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        )}
        </Container>
      </>
    );
}

export default TeamList
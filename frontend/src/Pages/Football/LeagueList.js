import { React, useEffect, useState } from 'react'
import LeagueListApi from '../../Api/footballApi/LeagueListApi'
import { Card, Container, Table} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import FootballSubNavBar from './FootballSubNavBar'
import { useHistory } from 'react-router-dom'

function LeagueList() {

  const [league, setleague] = useState(null)

  useEffect(() => {
    LeagueListApi().then((data) => {
      setleague(data.leagues)
    }).catch(err => console.log(err));
  }, [])

  //console.log(league)


  let history = useHistory();
  const routeChange = (e) => {
    console.log(e);
    history.push({
      pathname: "/football/League/LeagueInfo",
      state: { e }, //passing prop to the component
    });
    //console.log(history.push('/'))
  };

  return (
    <>
      <FootballSubNavBar></FootballSubNavBar>

      <div>
        <Container className='mt-2'>
          <Container>
            <Card>
              <Card.Text style={{ fontSize: '2rem', textAlign: 'center', fontWeight: 'bold' }}>Top Leagues</Card.Text>
            </Card>
          </Container>
        </Container>

        <Container>
          <Container>


            <Card>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <td>League Country</td>
                    <td>Country Name</td>
                    <td>League Logo</td>
                    <td>League Name</td>
                  </tr>
                  </thead>
                  <tbody>
                  {league ? league.map((data, key) => {
                    return (
                      <tr onClick={()=>routeChange(data)}>
                        <td>
                          <Image src={data.country_logo} roundedCircle fluid style={{width:'4rem'}}></Image>
                          </td>
                        <td>{data.country_name}</td>
                        <td>
                        <Image src={data.league_logo} roundedCircle fluid style={{width:'4rem'}}></Image>
                        </td>
                        <td>{data.league_name}</td>
                      </tr>
                )
                  }) : ''
                  }

                </tbody>

              </Table>
            </Card>


          </Container>
        </Container>

      </div>



    </>
  );
}

export default LeagueList
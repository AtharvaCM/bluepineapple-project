import { React, useEffect, useState } from 'react'
import LeagueListApi from '../../Api/footballApi/LeagueListApi'
import { Card,Table} from 'react-bootstrap'
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

 


  let history = useHistory();
  const routeChange = (e) => {
    history.push({
      pathname: "/football/League/LeagueInfo",
      state: { e }, //passing prop to the component
    });
    
  };

  return (
    <>
      <FootballSubNavBar></FootballSubNavBar>

      <div>
        
          
            <Card>
              <Card.Text style={{ fontSize: '2rem', textAlign: 'center', fontWeight: 'bold' }}>Top Leagues</Card.Text>
            </Card>
        
            <Card>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <td style={{fontWeight:'bold'}}>League Country</td>
                    <td style={{fontWeight:'bold'}}>Country Name</td>
                    <td style={{fontWeight:'bold'}}>League Logo</td>
                    <td style={{fontWeight:'bold'}}>League Name</td>
                  </tr>
                  </thead>
                  <tbody>
                  {league ? league.map((data, index) => {
                    return (
                      
                      <tr onClick={()=>routeChange(data)} key={index} style={{cursor:'pointer'}}>
                        <td>
                          <Image src={data.country_logo} roundedCircle fluid style={{width:'4rem',alignSelf:'center'}}></Image>
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


          

      </div>



    </>
  );
}

export default LeagueList
import { React, useEffect, useState } from 'react'
import FinishedMatches from '../../Api/footballApi/FinishedMatches'
import { Card, Table, CardGroup, Container, Dropdown } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { useHistory } from "react-router-dom"

function CurrentMatches() {
  const [currentMatches, setcurrentMatches] = useState(null)
  const [sort, setsort] = useState(null)
  useEffect(() => {
    FinishedMatches().then((data) => {
      setcurrentMatches(data.matches);
      setsort(data.matches)
      //console.log(data)
    })
  }, [])
  console.log(currentMatches);

  let history = useHistory();

  const cardClickHadler = (e) => {
    console.log('clicked on card', e);
    history.push({
      pathname: "/football/Scores/MatchSummary",
      state: { e }, //passing prop to the component
    });
  }

  const seriesHandler = (e) => {
    //console.log(e);
    if (e === 'Premier League') {
      const updatedMatches = currentMatches.filter((data) => {
        return data.league_name === e;
      })
      setsort(updatedMatches);
      console.log(updatedMatches);
    }

    if (e === 'Cup - Round of 32') {
      const updatedMatches = currentMatches.filter((data) => {
        return data.league_name === e;
      })
      setsort(updatedMatches);
      console.log(updatedMatches);
    }

    if (e === 'All') {
      FinishedMatches().then((data) => {
        setsort(data.matches);
        //console.log(data)
      })
    }

  }

  const seasonHandler = (e) => {
    console.log(e === '2021/2022');
    if (e === '2021/2022') {

      const updatedMatches = currentMatches.filter((data) => {
        return data.league_season === e;
      })
      setsort(updatedMatches);
      console.log(updatedMatches);
    }

    if (e === '2022') {
      const updatedMatches = currentMatches.filter((data) => {
        return data.league_season === e;
      })
      setsort(updatedMatches);
      console.log(updatedMatches);
    }
  }


  return (
    <>
      <Container className='mt-2'>
        <Container>
          <Card>
            <Card.Header>
              <div className="mt-2 me-2 mb-2 d-flex">

                <Dropdown className="d-inline mx-5">
                  <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: '#E9DCC9', border: 'none', color: 'black' }}>
                    Series
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => seriesHandler('Premier League')}>Premier League</Dropdown.Item>
                    <Dropdown.Item onClick={() => seriesHandler('Cup - Round of 32')}>Cup - Round of 32</Dropdown.Item>
                    <Dropdown.Item onClick={() => seriesHandler('All')}>All</Dropdown.Item>
                    <Dropdown.Item onClick={() => seriesHandler('Other')}>Other</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>



                <Dropdown className="d-inline mx-5" >
                  <Dropdown.Toggle style={{ backgroundColor: '#E9DCC9', border: 'none', color: 'black' }} id="dropdown-basic">
                    Status
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Finished</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">OnGoing</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>



                <Dropdown className="d-inline mx-5" align="end">
                  <Dropdown.Toggle style={{ backgroundColor: '#E9DCC9', border: 'none', color: 'black' }} id="dropdown-basic">
                    League Season
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => seasonHandler('2022')}>2022</Dropdown.Item>
                    <Dropdown.Item onClick={() => seasonHandler('2021/2022')}>2021/2022</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </div>
            </Card.Header>

          </Card>
        </Container>
        {sort ? sort.map((data, index) => {
          
          return (
            <Card className="mt-2 ms-5 me-5" onClick={() => cardClickHadler(data)} style={{ boxShadow: '23px solid white', border: 'none' }} key={index}>
              <Card.Header>
                <Table className="table table-borderless">
                  <tr>
                    <td style={{ fontSize: "35px", fontWeight: "bold" }} colSpan={3}>
                      {sort === null ? 'N/A' : data.event_home_team} VS {sort === null ? 'N/A' : sort[0].event_away_team}
                    </td>
                  </tr>

                  <tr style={{ fontSize: "15px", fontWeight: "bold" }}>
                    {/* <td>Venue : {sort === null ? 'N/A' : data.event_stadium}</td> */}
                    <td>Date : {sort === null ? 'N/A' : data.event_date}</td>
                    <td>Series : {sort === null ? 'N/A' : data.league_name}</td>
                    <td>League Season : {sort === null ? 'N/A' : data.league_season}</td>
                    <td>{sort === null ? 'N/A' : data.league_round}</td>
                    <td>Status : {sort === null ? 'N/A' : data.event_status === 'Finished' ? <span style={{ border: '5px', backgroundColor: 'green', borderRadius: '5px' }}>{data.event_status}</span> : data.event_status}</td>
                  </tr>
                </Table>
              </Card.Header>

              <Card.Body>
                <CardGroup>
                  <Card border="light" style={{ border: 'none' }}>
                    <Card.Body
                      style={{ height: "100px", width: "250px", alignSelf: "center" }}
                    >
                      <div style={{ width: '7rem' }}>
                        <Card.Img
                          style={{ height: '6rem' }}
                          variant="top"
                          src={data.home_team_logo === null ? 'https://apiv2.allsportsapi.com/logo/4282_great-olympics.jpg' : data.home_team_logo}
                        />
                      </div>
                    </Card.Body>
                  </Card>

                  <Card border="light" style={{ border: 'none' }}>
                    <Card.Body
                      style={{ height: "100px", width: "250px", alignSelf: "center" }}
                    >
                      <Card.Title style={{ textAlign: "center", fontWeight: "bold", color: 'red' }}>
                        Full time
                      </Card.Title>
                      <Card.Text
                        style={{
                          fontSize: "50px",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        {currentMatches === null ? 'N/A' : data.event_ft_result}
                        <Marquee speed={25} style={{ fontSize: '20px' }} gradient={false}>
                          {(parseInt(data.event_ft_result.split("")[0]) > parseInt(data.event_ft_result.split("")[4])) ? <h5 style={{ color: 'green' }}>{data.event_home_team} </h5> : (parseInt(data.event_ft_result.split("")[0]) < parseInt(data.event_ft_result.split("")[4])) ? <h5 style={{ color: 'green' }}>{data.event_away_team}</h5> : <h5 style={{ color: 'blue' }}>Match Drawn</h5>}
                        </Marquee>
                      </Card.Text>

                    </Card.Body>

                  </Card>

                  <Card border="light" style={{ border: 'none' }}>
                    <Card.Body
                      style={{ height: "150px", width: "250px", alignSelf: "center" }}
                    >
                      <div style={{ width: '7rem' }}>
                        <Card.Img
                          variant="top"
                          src={currentMatches === null ? 'N/A' : data.away_team_logo}
                          style={{ height: '7rem' }}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Card.Body>
            </Card>
          )


        }) : ''}
      </Container>
    </>

  );
}

export default CurrentMatches
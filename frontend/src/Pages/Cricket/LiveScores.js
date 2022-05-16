import { React, useEffect, useState } from 'react'
import { Card, CardGroup, Button, Table, Container, Dropdown } from 'react-bootstrap'
import CricSubNavBar from '../../Components/Cricket/CricSubNavBar'
import currentMatchesApi from '../../Api/CurrentMatchesApi'
import Spinner from '../../Components/Spinner'

function LiveScores() {
    const [currentMatches, setcurrentMatches] = useState(null)
    const [sortdata,setsortdata] = useState(null)
    const [sortdate,setsortDate] = useState(null)

    useEffect(() => {

        getdata();
    }, []);

    const getdata = () => {
        currentMatchesApi().then((data) => {
            //setcurrentMatches(...currentMatches,data.data)
            //console.log(data.data);
            setcurrentMatches(data.data);
            setsortdata(data.data);
            setsortDate(data.data);
            

        }).catch(err => console.log(err))

    }

    //console.log(currentMatches);


    const matchHandler = (e) => {
        if (e === 't20') {
            const updatedMatches = currentMatches.filter((data) => {
              return data.matchType === e;
            })
            setsortdata(updatedMatches);
            console.log(updatedMatches);
          }

          if (e === 'odi') {
            const updatedMatches = currentMatches.filter((data) => {
              return data.matchType === e;
            })
            setsortdata(updatedMatches);
            console.log(updatedMatches);
          }

          if (e === 'test') {
            const updatedMatches = currentMatches.filter((data) => {
              return data.matchType === e;
            })
            setsortdata(updatedMatches);
            //console.log(updatedMatches);
          }

          if (e === 'all') {
            
            setsortdata(currentMatches);
            //console.log(updatedMatches);
          }
    }

    const dateHandler=(e)=>{

        if(e==='ascending'){

            const  date =  sortdate.sort(function(a,b){
                let c = a.date;
                let d =b.date;
                if(c < d){
                    return -1;
                }
      
                if(c > d){
                  return 1;
              }
      
              return 0;
            });
      
            console.log(date);
            setsortdata(date);

        }
      
        if(e === 'descending')
        {
            const  date =  sortdate.sort(function(a,b){
                let c = a.date;
                let d =b.date;
                if(c < d){
                    return -1;
                }
      
                if(c > d){
                  return 1;
              }
      
              return 0;
            }).reverse();
      
            setsortdata(date);
            console.log(date);
        }
        
        //
        //console.log(sort);
    }

    console.log(sortdata);

    if (currentMatches === null) {
        return (
            <Spinner></Spinner>
        )
    }
    else {

        //console.log(currentMatches[0].teamInfo[0]);
        return (
            <>
                <CricSubNavBar></CricSubNavBar>

                <Container className='mt-2'>
                    <Container>
                        <Card>
                            <Card.Header>
                                <Dropdown className="d-inline mx-5">
                                    <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: '#E9DCC9', border: 'none', color: 'black' }}>
                                        Match Type
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => matchHandler('test')}>Test</Dropdown.Item>
                                        <Dropdown.Item onClick={() => matchHandler('t20')}>T20</Dropdown.Item>
                                        <Dropdown.Item onClick={() => matchHandler('odi')}>ODI</Dropdown.Item>
                                        <Dropdown.Item onClick={() => matchHandler('all')}>All</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                {/* //sort by date */}
                                <Dropdown className="d-inline mx-5">
                                    <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: '#E9DCC9', border: 'none', color: 'black' }}>
                                        Sort by Date
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => dateHandler('ascending')}>LATEST</Dropdown.Item>
                                        <Dropdown.Item onClick={() => dateHandler('descending')}>OLDEST</Dropdown.Item>
                                        
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card.Header>
                        </Card>
                    </Container>
                </Container>

                {sortdata?sortdata.map((data, index) => {
                    console.log(data);
                    return (
                        <Container>
                            <Container>

                                <Card className="mt-2 ms-5 me-5 mb-2" key={index} bg='light'>
                                    <Card.Header>
                                        <Table className="table table-borderless" style={{ backgroundColor: 'white' }}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ fontSize: "35px", fontWeight: "bold", color: 'black' }} colSpan={3}>
                                                        {data.name}
                                                    </td>
                                                </tr>

                                                <tr style={{ fontSize: "15px", fontWeight: "bold", color: 'black' }}>
                                                    <td>Venue : {data.venue}</td>
                                                    <td>Date & Time : {new Date(data.dateTimeGMT).toLocaleString()}</td>
                                                    <td>Match Type : {data.hasOwnProperty('matchType') ? data.matchType : 'N/A'}</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Header>

                                    <Card.Body >
                                        <CardGroup>
                                            <Card style={{ borderColor: 'white' }}>
                                                <Card.Body
                                                    style={{ height: "250px", width: "250px", alignSelf: "center" }}
                                                >
                                                    <Card.Img
                                                        variant="top"
                                                        src={data.teamInfo[0].img}
                                                    />

                                                </Card.Body>
                                            </Card>

                                            <Card style={{ borderColor: 'white' }}>
                                                <Card.Body style={{ height: "250px", width: "250px", alignSelf: "center" }}>
                                                    <Card.Title style={{ textAlign: "center", fontWeight: "bold", fontSize: '15px', color: 'black' }}>
                                                        Status : {data.status}
                                                    </Card.Title>

                                                    <Card.Text style={{ fontSize: "20px", textAlign: "center", fontWeight: "bold", color: 'black', marginTop: '25px' }}>
                                                        {data.teamInfo[0].shortname} : {data.score[0] ? data.score[0].r : "-"} / {data.score[0] ? data.score[0].w : "-"} ({data.score[0] ? data.score[0].o : "-"})
                                                    </Card.Text>

                                                    <Card.Text style={{ fontSize: "20px", textAlign: "center", fontWeight: "bold", color: 'black' }}>
                                                        {data.teamInfo[1] ? data.teamInfo[1].shortname : ""} : {data.score[1] ? data.score[1].r : "-"} / {data.score[1] ? data.score[1].w : "-"} ({data.score[1] ? data.score[1].o : "-"})

                                                    </Card.Text>
                                                </Card.Body>
                                                <Button style={{ alignSelf: "center", backgroundColor: '#71C6DD', fontWeight: 'bold' }} onClick={() => window.location.reload(false)}>Refresh</Button>
                                            </Card>

                                            <Card style={{ backgroundColor: 'white', borderColor: 'white' }}>
                                                <Card.Body
                                                    style={{ height: "250px", width: "250px", alignSelf: "center" }}
                                                >
                                                    <Card.Img
                                                        variant="top"
                                                        src={data.teamInfo[1] ? data.teamInfo[1].img : "https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/cricket-logo-maker/All-Star-Cricket-Team-Logo-Maker-for-Cricket-Teams.png"}
                                                    />

                                                </Card.Body>
                                            </Card>
                                        </CardGroup>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Container>
                    )
                }):<Spinner></Spinner>}

            </>
        )
    }
}

export default LiveScores
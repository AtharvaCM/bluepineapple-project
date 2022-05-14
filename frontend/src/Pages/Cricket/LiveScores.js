import { React, useEffect, useState } from 'react'
import { Card, CardGroup, Button, Table, Container, Dropdown } from 'react-bootstrap'
import CricSubNavBar from '../../Components/Cricket/CricSubNavBar'
import currentMatchesApi from '../../Api/CurrentMatchesApi'
import Spinner from '../../Components/Spinner'

function LiveScores() {
    const [currentMatches, setcurrentMatches] = useState(null)

    useEffect(() => {

        getdata();
    }, []);

    const getdata = () => {
        currentMatchesApi().then((data) => {
            //setcurrentMatches(...currentMatches,data.data)
            //console.log(data.data);
            setcurrentMatches(data.data);

        }).catch(err => console.log(err))

    }

    console.log(currentMatches);


    const matchHandler = () => {

    }

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
                            <Dropdown className="d-inline mx-5">
                                <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: '#E9DCC9', border: 'none', color: 'black' }}>
                                    Series
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => matchHandler('t20')}>Premier League</Dropdown.Item>
                                    <Dropdown.Item onClick={() => matchHandler('test')}>Cup - Round of 32</Dropdown.Item>
                                    <Dropdown.Item onClick={() => matchHandler('odi')}>All</Dropdown.Item>
                                    <Dropdown.Item onClick={() => matchHandler('N/A')}>Other</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card>
                    </Container>
                </Container>

                {currentMatches.map((data, index) => {

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
                })}

            </>
        )
    }
}

export default LiveScores
import React, { useState,useEffect } from "react";
//import { Link } from "react-router-dom";
import CricRankingNavbar from "../../../Components/Cricket/Ranking/CricRankingNavbar";
import { Button, Col, Card, Row, Table } from "react-bootstrap"
import CricSubNavBar from '../../../Components/Cricket/CricSubNavBar';
import Test from "../../../RankingDemo/RankBatsmanTest";
//import ODI from "../../../RankingDemo/RankBatsmanODI";
//import Twenty from "../../../RankingDemo/RankBatsmanT20";
import { useHistory } from "react-router-dom";
import {CricRankTestApi,CricRankOdiApi,CricRankT20Api} from "../../../Api/PlayerRankingApi";

function CricRankBatting() {
    let history = useHistory();

    const [Details, setDetails] = useState(Test);
    const [updatePlayer, setupdatePlayer] = useState(Details[0])

    useEffect(() => {

        CricRankTestApi().then((response) => {
            //console.log(response.data);
            setDetails(response.data)
            
        }
        ).catch((err) => console.log(err));

    }, [])

    console.log(Details)


    const routeChange = (e) => {
        history.push({
            pathname: "/Cricket/players/Playernfo",
            state: { e },
        })
    }

    const clickHandler = (e) => {
        setupdatePlayer(e);
    }


    const changeData = (Data) => {
        if (Data === "Test") {
            CricRankTestApi().then((response) => {
                //console.log(response.data);
                setDetails(response.data)
                
            }
            ).catch((err) => console.log(err));
        }
        else if (Data === "ODI") {
            CricRankOdiApi().then((response) => {
                //console.log(response.data);
                setDetails(response.data)
                
            }
            ).catch((err) => console.log(err));
        }
        else if (Data === "T20") {
            CricRankT20Api().then((response) => {
                //console.log(response.data);
                setDetails(response.data)
                
            }
            ).catch((err) => console.log(err));
        }
    }
    return (
        <>
            <CricSubNavBar />
            <CricRankingNavbar />
            <div className='container'>
                <Card style={{ backgroundColor: '#3F4156', color: 'white' }} className="mx-auto, w-100 ,my-auto mb-2 mt-2">
                    {/* <Row> */}
                        <div className="mt-3 mb-3">
                            <Button onClick={() => changeData("Test")} style={{ textDecoration: 'none', color: 'black', borderRadius: 20 }} className="mx-4 w-25">Test</Button>
                            <Button onClick={() => changeData("ODI")} style={{ textDecoration: 'none', color: 'black', borderRadius: 20 }} className="mx-4 w-25">ODI</Button>
                            <Button onClick={() => changeData("T20")} style={{ textDecoration: 'none', color: 'black', borderRadius: 20 }} className="mx-4 w-25">T20</Button>
                        </div>

                        {/* <Col md={6} sm={12} className="mx-2"> */}
                            <Table style={{ color: 'white' }} className="conatiner">
                                <tr>
                                    <th style={{ fontSize: '3.5vh' }}>Pos</th>
                                    <th colSpan={2} style={{ textAlign: "center", fontSize: '3.5vh' }}>Batsman</th>
                                </tr>
                                {Details.map(player => {
                                    return (
                                        <tr key={player.id}>
                                            <td>{player.id}</td>
                                            <td><img src={player.img_src} alt=".." style={{width:'100px',height:'100px',borderRadius:'50px'}}></img></td>
                                            <td ><h4 onClick={() => clickHandler(player)}>{player.name}</h4></td>
                                        </tr>
                                    )
                                }
                                )}
                            </Table>
                        {/* </Col> */}
                        {/* <Col md={5} sm={12} className="d-none d-md-block">
                            <Card style={{ backgroundColor: '#3F4156', color: 'white', border: 'none' }} className="mx-auto w-100 my-auto mb-2 h-100">
                                <img src={updatePlayer.img_src} className="rounded mx-auto d-block my-4" style={{ width: '20vh' }} alt="..."></img>
                                <Table className="mx-4" style={{ fontSize: 22, color: 'white',border:'none' }}>
                                    <tr>
                                        <td>Name:</td>
                                        <td>{updatePlayer.pname}</td>
                                    </tr>
                                    <tr>
                                        <td>Born:</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Birth Place:</td>
                                        <td>{ }</td>
                                    </tr>
                                    <tr>
                                        <td>Role:</td>
                                        <td>{updatePlayer.role}</td>
                                    </tr>
                                    <tr>
                                        <td>Team:</td>
                                        <td>India</td>
                                    </tr>
                                </Table>
                                <Button style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#71C6DD', alignSelf: 'center' }} className={'w-75 mt-2'} onClick={() => routeChange(updatePlayer)}>Read more..</Button>
                            </Card> 

                            </Col>*/}
                    {/* </Row> */}
                </Card>

            </div>
        </>
    );


}
export default CricRankBatting;
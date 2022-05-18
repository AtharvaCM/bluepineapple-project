import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row,Col} from 'react-bootstrap'
//import { useLocation } from 'react-router-dom';
import CricSubNavBar from '../../Components/Navbar/CricSubNavBar';
import PlayerDetailsAPI from '../../Api/PlayerDetailsAPI';
import { useEffect, useState } from 'react';

function CricPlayerInfo(prop) {
    //console.log(prop.location.state.e.id)
    const [PlayerDetails,setPlayerDetails]=useState(null)

    useEffect(() => {
    PlayerDetailsAPI(prop.location.state.e.id)
      .then((response) => {
        setPlayerDetails(response.data);
        //  console.log(response.data);
      })
      .catch((err) => console.log(err));
    },[]);
    if (PlayerDetails === null )
    return null 
    else
    {
        console.log(PlayerDetails[0].bowling)
    return (
        <>
        <CricSubNavBar/>
        <div className='container mt-2' style={{backgroundColor:'#FFFFFF'}} >
            <table style={{color:'black'}} className="mt-2">
                <tr>
                    <th><img src={PlayerDetails[0].img_src} class="rounded float-left mt-2 mb-2" alt="..."></img></th>
                    <th><h1>{PlayerDetails[0].name}</h1></th>
                </tr>
               
                        
            </table>
            <Row>
                <Col md={5} sm={12}>
                <Card style={{backgroundColor:'#ffffe6',color:'black'}} className="mb-1">
                    <Card.Body>
                        <table>
                            <tr colSpan={2}>
                                 <th><h5>Personal Information</h5></th>
                            </tr>
                            <tr>
                                <td><h5>Born:</h5></td>
                                <td>{PlayerDetails[0].date_of_birth} ({prop.location.state.e.age})</td>
                            </tr>
                            <tr>
                                <td><h5>Birth place:</h5></td>
                                <td>{PlayerDetails[0].birth_place}</td>
                            </tr>
                            <tr>
                                <td><h5>Role</h5></td>
                                <td>{PlayerDetails[0].role}</td>
                            </tr>
                            
                        </table>     
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={12} md={6}>
                <Card style={{backgroundColor:'#ffffe6',color:'black'}} className="mb-1">
                    <h5>Profile</h5>
                    <p>{PlayerDetails[0].description}</p>
                    </Card>
                
                </Col>
            </Row>
                <Card style={{backgroundColor:'#ffffe6',color:'black'}} className="mb-1">
                  <Card.Body>
                    <h5>Batting Career Summary</h5>
                    <table className='table' style={{color:'black'}}>
                        <tr>
                            <th></th>
                            <th>M</th>
                            <th>Inn</th>
                            <th>Runs</th>
                            <th>HS</th>
                            <th>Avg</th>
                            <th>SR</th>
                            {/* <th>100</th>
                            <th>50</th> */}
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>{PlayerDetails[0].batting.test.maches  === '' ? '-' :PlayerDetails[0].batting.test.maches}</td>
                            <td>{PlayerDetails[0].batting.test.innings  === '' ? '-' :PlayerDetails[0].batting.test.innings}</td>
                            <td>{PlayerDetails[0].batting.test.runs  === '' ? '-' :PlayerDetails[0].batting.test.runs}</td>
                            <td>{PlayerDetails[0].batting.test.high_score  === '' ? '-' :PlayerDetails[0].batting.test.high_score }</td>
                            <td>{PlayerDetails[0].batting.test.batting_avg  === '' ? '-' :PlayerDetails[0].batting.test.batting_avg }</td>
                            <td>{PlayerDetails[0].batting.test.sr  === '' ? '-' :PlayerDetails[0].batting.test.sr}</td>
                            {/* <td>{PlayerDetails[0].batting.test.hundreds}</td>
                            <td>{PlayerDetails[0].batting.test.fifties}</td> */}
                        </tr>
                        <tr>
                            <td>ODI</td>
                            <td>{PlayerDetails[0].batting.odi.maches  === '' ? '-' :PlayerDetails[0].batting.odi.maches}</td>
                            <td>{PlayerDetails[0].batting.odi.innings  === '' ? '-' :PlayerDetails[0].batting.odi.innings}</td>
                            <td>{PlayerDetails[0].batting.odi.runs  === '' ? '-' :PlayerDetails[0].batting.odi.runs}</td>
                            <td>{PlayerDetails[0].batting.odi.high_score  === '' ? '-' :PlayerDetails[0].batting.odi.high_score }</td>
                            <td>{PlayerDetails[0].batting.odi.batting_avg  === '' ? '-' :PlayerDetails[0].batting.odi.batting_avg}</td>
                            <td>{PlayerDetails[0].batting.odi.sr  === '' ? '-' :PlayerDetails[0].batting.odi.sr}</td>
                            {/* <td>2</td>
                            <td>55</td> */}
                        </tr>
                        <tr>
                            <td>T20l</td>
                            <td>{PlayerDetails[0].batting.t20.maches  === '' ? '-' :PlayerDetails[0].batting.t20.maches}</td>
                            <td>{PlayerDetails[0].batting.t20.innings  === '' ? '-' :PlayerDetails[0].batting.t20.innings}</td>
                            <td>{PlayerDetails[0].batting.t20.runs  === '' ? '-' :PlayerDetails[0].batting.t20.runs}</td>
                            <td>{PlayerDetails[0].batting.t20.high_score  === '' ? '-' :PlayerDetails[0].batting.t20.high_score }</td>
                            <td>{PlayerDetails[0].batting.t20.batting_avg  === '' ? '-' :PlayerDetails[0].batting.t20.batting_avg}</td>
                            <td>{PlayerDetails[0].batting.t20.sr  === '' ? '-' :PlayerDetails[0].batting.t20.sr}</td>
                            {/* <td>2</td>
                            <td>55</td> */}
                        </tr>
                    </table>
                </Card.Body>
            </Card>

            <Card style={{backgroundColor:'#ffffe6',color:'black'}} className="mb-3">
                <Card.Body>
                    <h5>Bowling Career Summary</h5>
                    <table className='table' style={{color:'black'}}>
                        <tr>
                            <th></th>
                            <th>M</th>
                            <th>Inn</th>
                            <th>Wickets</th>
                            <th>HS</th>
                            <th>Avg</th>
                            <th>SR</th>
                            <th>5w</th>
                            <th>10w</th>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>{PlayerDetails[0].bowling.test.matches  === '' ? '-' :PlayerDetails[0].bowling.test.matches}</td>
                            <td>{PlayerDetails[0].bowling.test.innings  === '' ? '-' :PlayerDetails[0].bowling.test.innings}</td>
                            <td>{PlayerDetails[0].bowling.test.wickets  === '' ? '-' :PlayerDetails[0].bowling.test.wickets}</td>
                            <td>{PlayerDetails[0].bowling.test.Economy  === '' ? '-' :PlayerDetails[0].bowling.test.Economy }</td>
                            <td>{PlayerDetails[0].bowling.test.bowling_avg  === '' ? '-' :PlayerDetails[0].bowling.test.bowling_avg }</td>
                            <td>{PlayerDetails[0].bowling.test.sr === '' ? '-' :PlayerDetails[0].bowling.test.sr}</td>
                            <td>{PlayerDetails[0].bowling.test.five_w === '' ? '-' :PlayerDetails[0].bowling.test.five_w}</td>
                            <td>{PlayerDetails[0].bowling.test.ten_w  === '' ? '-' :PlayerDetails[0].bowling.test.ten_w }</td>
                        </tr>
                        <tr>
                            <td>ODI</td>
                            <td>{PlayerDetails[0].bowling.odi.matches === '' ? '-' : PlayerDetails[0].bowling.odi.matches }</td>
                            <td>{PlayerDetails[0].bowling.odi.innings  === '' ? '-' : PlayerDetails[0].bowling.odi.innings}</td>
                            <td>{PlayerDetails[0].bowling.odi.wickets  === '' ? '-' :PlayerDetails[0].bowling.odi.wickets}</td>
                            <td>{PlayerDetails[0].bowling.odi.Economy  === '' ? '-' :PlayerDetails[0].bowling.odi.Economy}</td>
                            <td>{PlayerDetails[0].bowling.odi.bowling_avg  === '' ? '-' :PlayerDetails[0].bowling.odi.bowling_avg}</td>
                            <td>{PlayerDetails[0].bowling.odi.sr  === '' ? '-' :PlayerDetails[0].bowling.odi.sr}</td>
                            <td>{PlayerDetails[0].bowling.odi.five_w  === '' ? '-' :PlayerDetails[0].bowling.odi.five_w}</td>
                            <td>{PlayerDetails[0].bowling.odi.ten_w  === '' ? '-' :PlayerDetails[0].bowling.odi.ten_w}</td>
                        </tr>
                        <tr>
                            <td>T20l</td>
                            <td>{PlayerDetails[0].bowling.t20.matches  === '' ? '-' :PlayerDetails[0].bowling.t20.matches}</td>
                            <td>{PlayerDetails[0].bowling.t20.innings  === '' ? '-' :PlayerDetails[0].bowling.t20.innings}</td>
                            <td>{PlayerDetails[0].bowling.t20.wickets  === '' ? '-' :PlayerDetails[0].bowling.t20.wickets}</td>
                            <td>{PlayerDetails[0].bowling.t20.Economy  === '' ? '-' :PlayerDetails[0].bowling.t20.Economy}</td>
                            <td>{PlayerDetails[0].bowling.t20.bowling_avg  === '' ? '-' :PlayerDetails[0].bowling.t20.bowling_avg}</td>
                            <td>{PlayerDetails[0].bowling.odi.sr  === '' ? '-' :PlayerDetails[0].bowling.odi.sr}</td>
                            <td>{PlayerDetails[0].bowling.t20.five_w  === '' ? '-' :PlayerDetails[0].bowling.t20.five_w}</td>
                            <td>{PlayerDetails[0].bowling.t20.ten_w  === '' ? '-' :PlayerDetails[0].bowling.t20.ten_w }</td>
                        </tr>
                    </table>
                </Card.Body>
            </Card>
       
        </div>
        
        </>
    );
    }
}
export default CricPlayerInfo;
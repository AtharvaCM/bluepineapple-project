import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row,Col} from 'react-bootstrap'
//import { useLocation } from 'react-router-dom';
import CricSubNavBar from '../../Components/Navbar/CricSubNavBar';
import PlayerDetailsAPI from '../../Api/PlayerDetailsAPI';
import { useEffect, useState } from 'react';

function CricPlayerInfo(prop) {
    
    const [PlayerDetails,setPlayerDetails]=useState(null)

    useEffect(() => {
    PlayerDetailsAPI(prop.location.state.e.id)
      .then((response) => {
        setPlayerDetails(response.data);
       
      })
      .catch((err) => console.log(err));
    },[]);

    


    if (PlayerDetails === null )
    return null 
    else
    {
       
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
                                 <h5 style={{fontWeight:'bold'}}>Personal Information</h5>
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
                    <h5 className='ms-2 mt-2' style={{fontWeight:'bold'}}>Debut</h5>
                    <p className='ms-2' >Test : {PlayerDetails[0].batting.test.debut}</p>
                    <p className='ms-2' >ODI : {PlayerDetails[0].batting.odi.debut}</p>
                    <p className='ms-2' >T20 : {PlayerDetails[0].batting.t20.debut}</p>
                    </Card>
                
                </Col>
            </Row>

            {/*batting details*/}
                <Card style={{backgroundColor:'#ffffe6',color:'black'}} className="mb-1">
                  <Card.Body>
                    <h5 style={{fontWeight:'bold'}}>Batting Career Summary</h5>
                    <table className='table mt-2' style={{color:'black'}}>
                        <tr>
                            <th>Type</th>
                            <th>Matches</th>
                            <th>Innings</th>
                            <th>Runs</th>
                            <th>High score</th>
                            <th>Average</th>
                            <th>Strike Rate</th>
                            
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
                    <h5 style={{fontWeight:'bold'}}>Bowling Career Summary</h5>
                    <table className='table' style={{color:'black'}}>
                        <tr>
                            <th>Type</th>
                            <th>Matches</th>
                            <th>Innings</th>
                            <th>Wickets</th>
                            <th>Economy</th>
                            <th>Average</th>
                            <th>Strike Rate</th>
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
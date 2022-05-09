import React from "react";
import { Link } from "react-router-dom";
import CricRankingNavbar from "../../../Components/Cricket/Ranking/CricRankingNavbar";
import {Button,Col,Card,Row} from "react-bootstrap"
import CricSubNavBar from '../../../Components/Cricket/CricSubNavBar';

function CricRankBatting()
{
    return (
        <>
            <CricSubNavBar />
            <CricRankingNavbar/>
            <div className='container'>
            <Card style={{backgroundColor:'#3F4156',color:'white'}}  className="mx-auto, w-100 ,my-auto mb-2 mt-2">
                    <Row>
                    <div>              
                        <Button style={{ textDecoration: 'none', color: 'black',borderRadius:20 }} className="mx-4 w-25">Test</Button>
                        <Button style={{ textDecoration: 'none', color: 'black',borderRadius:20 }} className="mx-4 w-25">ODI</Button>
                        <Button style={{ textDecoration: 'none', color: 'black',borderRadius:20 }} className="mx-4 w-25">T20</Button>
                    </div>
                          <hr></hr>
                         <Col xs={2} md={6} className="mx-2">
                        
                         <table className='table'>
                             <tr>
                                 <th>Pos</th>
                                 <th colSpan={2} style={{textAlign:"center"}}>Batsman</th>
                             </tr>
                             <tr>
                                 <td>1</td>
                                 <td><img src="https://www.cricbuzz.com/a/img/v1/50x50/i1/c184115/marnus-labuschagne.jpg" alt=".."></img></td>
                                 <td><a href="#"><h4>Marnus Labuschagne</h4></a></td>
                             </tr>
                             <tr>
                                 <td>2</td>
                                 <td><img src="https://www.cricbuzz.com/a/img/v1/50x50/i1/c170658/rohit-sharma.jpg" alt=".."></img></td>
                                 <td><a href="#"><h4>Rohit Sharma</h4></a></td>
                             </tr>
                             <tr>
                                 <td>3</td>
                                 <td><img src="https://www.cricbuzz.com/a/img/v1/50x50/i1/c170661/virat-kohli.jpg" alt=".."></img></td>
                                 <td><a href="#"><h4>Virat Kohli</h4></a></td>
                             </tr>
                             <tr>
                                 <td>4</td>
                                 <td><img src="https://www.cricbuzz.com/a/img/v1/50x50/i1/c170661/virat-kohli.jpg" alt=".."></img></td>
                                 <td><a href="#"><h4>Virat Kohli</h4></a></td>
                             </tr>
                         </table>
                        </Col>
                        <Col xs={2} md={5}>
                            <Card style={{backgroundColor:'#3F4156',color:'white'}} className="mx-auto, w-100 ,my-auto  mb-2 mt-2 h-75 my-5">
                                <img src="https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg" className="rounded mx-auto d-block my-4" alt="..."></img>
                                <table className="mx-4" style={{fontSize:22}}>
                                    <tr>
                                        <td>Name:</td>
                                        <td>Virat Kohli</td>
                                    </tr>
                                    <tr>
                                        <td>Born:</td>
                                        <td>27th May,1984</td>
                                    </tr>
                                    <tr>
                                        <td>Birth Place:</td>
                                        <td>Pune</td>
                                    </tr>
                                    <tr>
                                        <td>Role:</td>
                                        <td>Batsman</td>
                                    </tr>
                                    <tr>
                                        <td>Team:</td>
                                        <td>India</td>
                                    </tr>
                                </table>
                                <a style={{fontSize:18,textAlign:"right",color:"white"}}  href="#">More Details...</a>
                            </Card>
                            
                        </Col>
                      </Row>       
                </Card>
            
            </div>
        </>
    );
}
export default CricRankBatting;
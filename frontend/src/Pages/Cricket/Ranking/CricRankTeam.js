import React from "react";
import CricRankingNavbar from "../../../Components/Cricket/Ranking/CricRankingNavbar";
import {Col,Card,Row,Button} from "react-bootstrap"
import CricSubNavBar from '../../../Components/Cricket/CricSubNavBar';



function CricRankTeam()
{
    return (
        <>
            <CricSubNavBar />
            <CricRankingNavbar/>
            <div className='container'>
            <Card style={{backgroundColor:'#3F4156',color:'white'}} className="mx-auto, w-100 ,my-auto mb-2 mt-2">
                    <div>
                        <Button style={{ textDecoration: 'none', color: 'black',borderRadius:20 }} className="mx-4 w-25">Test</Button>
                        <Button style={{ textDecoration: 'none', color: 'black',borderRadius:20 }} className="mx-4 w-25">ODI</Button>
                        <Button style={{ textDecoration: 'none', color: 'black',borderRadius:20 }} className="mx-4 w-25">T20</Button>
                    </div>
                          <hr></hr>
                     <Row>
                        <Col xs={2} md={6} className="mx-2">

                         <table className='table'>
                             <tr>
                                 <th>Pos</th>
                                 <th colSpan={2}>Team</th>
                             </tr>
                             <tr>
                                 <td>1</td>
                                 <td><img src="https://cdn.countryflags.com/thumbs/india/flag-3d-250.png" height={70} width={100}></img></td>
                                 <td><h4>India</h4></td>
                            </tr>
                            <tr>
                                 <td>1</td>
                                 <td><img src="https://cdn.countryflags.com/thumbs/india/flag-3d-250.png" height={70} width={100}></img></td>
                                 <td><h4>India</h4></td>
                            </tr>
                            <tr>
                                 <td>1</td>
                                 <td><img src="https://cdn.countryflags.com/thumbs/india/flag-3d-250.png" height={70} width={100}></img></td>
                                 <td><h4>India</h4></td>
                            </tr>
                            <tr>
                                 <td>1</td>
                                 <td><img src="https://cdn.countryflags.com/thumbs/india/flag-3d-250.png" height={70} width={100}></img></td>
                                 <td><h4>India</h4></td>
                            </tr>
                             
                         </table>
                        </Col>
                        <Col xs={2} md={5}>
                        <Card style={{backgroundColor:'#3F4156',color:'white'}} className="mx-auto, w-100 ,my-auto  mb-2 mt-2 h-75 my-5">
                                <img src="https://cdn.countryflags.com/thumbs/india/flag-3d-250.png" height={100} width={140} className="rounded mx-auto d-block my-4" alt="..."></img>
                                <table className="mx-4" style={{fontSize:22}}>
                                    <tr>
                                        <td>Team:</td>
                                        <td>India</td>
                                    </tr>
                                    <tr>
                                        <td>Continent</td>
                                        <td>Asia</td>
                                    </tr>
                                    <tr>
                                        <td>No. Of Trophies</td>
                                        <td>50</td>
                                    </tr>
                                </table>
                                <a style={{fontSize:18,textAlign:"right",color:"white"}}  href="">More Details...</a>
                            </Card>
                            
                        </Col>
                      </Row>  
                 </Card>


            </div>
        </>
    )
}     

export default CricRankTeam;
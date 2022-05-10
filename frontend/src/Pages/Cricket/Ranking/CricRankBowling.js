import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CricRankingNavbar from "../../../Components/Cricket/Ranking/CricRankingNavbar";
import {Button,Col,Card,Row} from "react-bootstrap"
import CricSubNavBar from '../../../Components/Cricket/CricSubNavBar';
import Test from "../../../RankingDemo/RankBatsmanTest";
import ODI from "../../../RankingDemo/RankBatsmanODI";
import Twenty from "../../../RankingDemo/RankBatsmanT20";
import CricPlayerInfo from "../CricPlayerInfo";

function CricRankBowling()
{
    let history = useHistory();
     
    const routeChange = (e) => {
        history.push({
            pathname:"/Cricket/players/Playernfo",
            state:{e},
        })
    }

    const clickHandler = (e) =>{
        console.log(e);
        setupdatePlayer(e);
    }

    const pageChange = () => {
        <>
            <CricPlayerInfo/>  
        </>
    }

    const [Details,setDetails] = useState(Test);
    const [updatePlayer, setupdatePlayer] = useState(Details[0])
    const changeData = (Data) => {
        if(Data==="Test"){
            setDetails(Test)
            console.log(Details)}
        else if(Data==="ODI"){
            setDetails(ODI)
            console.log(Details)}
        else if(Data==="T20"){
            setDetails(Twenty)
            console.log(Details)}
    }
    
    //console.log(updatePlayer);
    return (
        <>
            <CricSubNavBar />
            <CricRankingNavbar/>
            <div className='container'>
            <Card style={{backgroundColor:'#3F4156',color:'white'}}  className="mx-auto, w-100 ,my-auto mb-2 mt-2">
                    <Row>
                    <div>              
                        <Button onClick={()=>changeData("Test")} style={{ textDecoration: 'none', color: 'black',borderRadius:20 }} className="mx-4 w-25">Test</Button>
                        <Button onClick={()=>changeData("ODI")} style={{ textDecoration: 'none', color: 'black',borderRadius:20 }} className="mx-4 w-25">ODI</Button>
                        <Button onClick={()=>changeData("T20")} style={{ textDecoration: 'none', color: 'black',borderRadius:20 }} className="mx-4 w-25">T20</Button>
                    </div>
                          <hr></hr>
                         <Col md={6} sm={12} className="mx-2">
                         <table className='table'>
                             <tr>
                                 <th>Pos</th>
                                 <th colSpan={2} style={{textAlign:"center"}}>Batsman</th>
                             </tr>
                         { Details.map( player => {
                           //console.log(player) 
                           return ( 
                             <tr  key={player.id}>
                                 <td>{player.id}</td>
                                 <td><img src={player.img} alt=".."></img></td>
                                 <td ><a href="#"><h4 onClick={()=>clickHandler(player)}>{player.pname}</h4></a></td>
                             </tr>
                            )}
                         )}     
                         </table>
                           
                       
                        </Col>
                        <Col md={5} sm={12}>
                            <Card style={{backgroundColor:'#3F4156',color:'white'}} className="mx-auto, w-100 ,my-auto  mb-2 mt-2 h-75 my-5">
                                <img src={updatePlayer.img} className="rounded mx-auto d-block my-4" alt="..."></img>
                                <table className="mx-4" style={{fontSize:22}}>
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
                                        <td>{}</td>
                                    </tr>
                                    <tr>
                                        <td>Role:</td>
                                        <td>{updatePlayer.role}</td>
                                    </tr>
                                    <tr>
                                        <td>Team:</td>
                                        <td>India</td>
                                    </tr>
                                </table>
                                <Button style={{ color: 'white', fontWeight: 'bold', backgroundColor: '#71C6DD' , alignSelf:'center'}} className={'w-75'} onClick = { () => routeChange(updatePlayer)}>Read more..</Button>
                             </Card>
                            
                        </Col>
                      </Row>       
                </Card>
            
            </div>
        </>
    );


}
export default CricRankBowling;
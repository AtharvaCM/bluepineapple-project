import React from 'react'
import { Card, Table } from 'react-bootstrap';
import '../../Resources/Styles/Gallery.css'
import FootballSubNavBar from './FootballSubNavBar'
import footballRanking from '../../Api/footballApi/footballRanking';

function Ranking() {
    return (
        <>
        <FootballSubNavBar></FootballSubNavBar>
        
            <Card>
                <Card.Header>
                    <h2>FIFA RANKINGS</h2>
                </Card.Header>
                <Card.Body>
                    <div className="d-flex justify-content-center">
                    <Table  style={{backgroundColor:'#F7F7F7'}}>
                        <thead>
                        <tr>
                            <th style={{fontSize:'25px'}}>Position</th>
                            <th style={{fontSize:'25px'}}>Flag</th>
                            <th style={{fontSize:'25px'}}>Team</th>
                        </tr>
                        </thead>
                        <tbody>
                        {footballRanking.map(Team => {
                            return (
                                <tr key={Team.position}>
                                  <td style={{fontWeight:'bold',fontSize:'20px'}}>{Team.position}</td>
                                  <td><img src={Team.flag_img} alt='img' width={100}></img></td>
                                 <td style={{fontWeight:'bold',fontSize:'20px'}}>{Team.name}</td>
                                </tr>  
                            )  
                        })}
                        </tbody>
                    </Table>
                    </div>
                </Card.Body>
            </Card>
        </>

    )

}

export default Ranking;
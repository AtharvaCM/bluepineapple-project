import React from 'react'
import { Card, Table } from 'react-bootstrap';
import '../../Resources/Styles/Gallery.css'
import FootballSubNavBar from './FootballSubNavBar'
import footballRanking from '../../Api/footballApi/footballRanking';

function Ranking() {
    console.log('hello from football ranking')
    console.log(footballRanking);
    return (
        <>
        <FootballSubNavBar></FootballSubNavBar>
        
            <Card>
                <Card.Header>
                    <h2>FIFA RANKINGS</h2>
                </Card.Header>
                <Card.Body>
                    <div className="d-flex justify-content-center">
                    <Table className='w-75' style={{backgroundColor:'#ffffe6'}}>
                        <thead>
                        <tr>
                            <th>Position</th>
                            <th>Flag</th>
                            <th>Team</th>
                        </tr>
                        </thead>
                        <tbody>
                        {footballRanking.map(Team => {
                            return (
                                <tr key={Team.position}>
                                  <td>{Team.position}</td>
                                  <td><img src={Team.flag_img} alt='img' width={100}></img></td>
                                 <td>{Team.name}</td>
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
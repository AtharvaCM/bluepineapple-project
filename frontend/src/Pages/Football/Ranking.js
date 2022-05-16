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
        <div className='container'>
            <Card>
                <Card.Header>
                    <h2>Internatinal Football Ranking</h2>
                </Card.Header>
                <Card.Body>
                    <div className="d-flex justify-content-center">
                    <Table className='w-75' style={{backgroundColor:'#ffffe6'}}>
                        <thead>
                        <tr>
                            <th>Position</th>
                            <th colSpan={2}>Team</th>
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
        </div>
        </>

    )

}

export default Ranking;
import React from 'react'
import Card from 'react-bootstrap/Card'
import { Table } from 'react-bootstrap'
import CricSubNavBar from '../../Components/Navbar/CricSubNavBar'


function Teams() {
    return (
        <>
            <CricSubNavBar></CricSubNavBar>

            <div className='container mt-2 mb-2'>
                <Card>
                    <Card.Header style={{fontWeight:'bold',fontSize:'20px'}}>Men's International Team</Card.Header>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sr.no</th>
                                <th>Name</th>
                                <th>Flag</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>India</td>
                                <td><img src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg' alt='logo' style={{width:'7rem',height:'3rem'}}></img></td>
                                
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Australia</td>
                                <td><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/255px-Flag_of_Australia_%28converted%29.svg.png' alt='logo' style={{width:'7rem',height:'3rem'}}></img></td>
                                
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>England</td>
                                <td><img src='https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg' alt='logo' style={{width:'7rem',height:'3rem'}}></img></td>
                            </tr>
                        </tbody>
                    </Table>

                </Card>

            </div>

            <div className='container mt-2 mb-2'>
                <Card>
                    <Card.Header style={{fontWeight:'bold',fontSize:'20px'}}>Women's Interntional Team</Card.Header>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sr.no</th>
                                <th>Name</th>
                                <th>Flag</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>India</td>
                                <td><img src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg' alt='logo' style={{width:'7rem',height:'3rem'}}></img></td>
                                
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Australia</td>
                                <td><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/255px-Flag_of_Australia_%28converted%29.svg.png' alt='logo' style={{width:'7rem',height:'3rem'}}></img></td>
                                
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>England</td>
                                <td><img src='https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg' alt='logo' style={{width:'7rem',height:'3rem'}}></img></td>
                            </tr>
                        </tbody>
                    </Table>

                </Card>

            </div>

            <div className='container mt-2 mb-2'>
                <Card>
                    <Card.Header style={{fontWeight:'bold',fontSize:'20px'}}>IPL Team</Card.Header>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sr.no</th>
                                <th>Name</th>
                                <th>Flag</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>India</td>
                                <td><img src='https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg' alt='logo' style={{width:'7rem',height:'3rem'}}></img></td>
                                
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Australia</td>
                                <td><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/255px-Flag_of_Australia_%28converted%29.svg.png' alt='logo' style={{width:'7rem',height:'3rem'}}></img></td>
                                
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>England</td>
                                <td><img src='https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg' alt='logo' style={{width:'7rem',height:'3rem'}}></img></td>
                            </tr>
                        </tbody>
                    </Table>

                </Card>

            </div>


        </>

    )
}

export default Teams
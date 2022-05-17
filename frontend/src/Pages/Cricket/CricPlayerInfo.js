import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row,Col} from 'react-bootstrap'
//import { useLocation } from 'react-router-dom';
import CricSubNavBar from '../../Components/Navbar/CricSubNavBar';

function CricPlayerInfo(prop) {
    console.log(prop.location.state.e)
    return (
        <>
        <CricSubNavBar/>
        <div className='container'style={{backgroundColor:'#FFFFFF'}} >
            <table style={{color:'black'}}>
                <tr>
                    <th><img src={prop.location.state.e.img_src} class="rounded float-left" alt="..."></img></th>
                    <th><h1>{prop.location.state.e.name}</h1>(India)</th>
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
                                <td>{prop.location.state.e.date_of_birth} ({prop.location.state.e.age})</td>
                            </tr>
                            <tr>
                                <td><h5>Birth place:</h5></td>
                                <td>{prop.location.state.e.birth_place}</td>
                            </tr>
                            <tr>
                                <td><h5>Role</h5></td>
                                <td>{prop.location.state.e.role}</td>
                            </tr>
                            
                        </table>     
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={12} md={6}>
                <Card style={{backgroundColor:'#ffffe6',color:'black'}} className="mb-1">
                    <h5>Profile</h5>
                    <p>{prop.location.state.e.description}</p>
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
                            <th>100</th>
                            <th>50</th>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>100</td>
                            <td>44</td>
                            <td>550</td>
                            <td>111</td>
                            <td>45.55</td>
                            <td>SR</td>
                            <td>100</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>ODI</td>
                            <td>100</td>
                            <td>44</td>
                            <td>550</td>
                            <td>111</td>
                            <td>45.55</td>
                            <td>SR</td>
                            <td>100</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>T20l</td>
                            <td>100</td>
                            <td>44</td>
                            <td>550</td>
                            <td>111</td>
                            <td>45.55</td>
                            <td>SR</td>
                            <td>100</td>
                            <td>50</td>
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
                            <th>Runs</th>
                            <th>HS</th>
                            <th>Avg</th>
                            <th>SR</th>
                            <th>100</th>
                            <th>50</th>
                        </tr>
                        <tr>
                            <td>Test</td>
                            <td>100</td>
                            <td>44</td>
                            <td>550</td>
                            <td>111</td>
                            <td>45.55</td>
                            <td>SR</td>
                            <td>100</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>ODI</td>
                            <td>100</td>
                            <td>44</td>
                            <td>550</td>
                            <td>111</td>
                            <td>45.55</td>
                            <td>SR</td>
                            <td>100</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>T20l</td>
                            <td>100</td>
                            <td>44</td>
                            <td>550</td>
                            <td>111</td>
                            <td>45.55</td>
                            <td>SR</td>
                            <td>100</td>
                            <td>50</td>
                        </tr>
                    </table>
                </Card.Body>
            </Card>
            
        </div>
        </>
    );
}
export default CricPlayerInfo;
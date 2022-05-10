import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Row,Col} from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import CricSubNavBar from '../../Components/Cricket/CricSubNavBar';

function CricPlayerInfo(prop) {
    //console.log(prop.location.state.e.pname)
    return (
        <>
        <CricSubNavBar/>
        <div className='container'>
            <table>
                <tr>
                    <th><img src={prop.location.state.e.img} class="rounded float-left" alt="..."></img></th>
                    <th><h1>{prop.location.state.e.pname}</h1>(India)</th>
                </tr>
               
                        
            </table>
            <Row>
                <Col md={5} sm={12}>
                <Card style={{backgroundColor:'#3F4156',color:'white'}} className="mb-3">
                    <Card.Body>
                        <table>
                            <tr colSpan={2}>
                                 <th><h5>Personal Information</h5></th>
                            </tr>
                            <tr>
                                <td><h5>Born:</h5></td>
                                <td>Jun 02,1987 (32years)</td>
                            </tr>
                            <tr>
                                <td><h5>Birth place:</h5></td>
                                <td>Sydney,New south Wales</td>
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
                    <h5>Profile</h5>
                    <p>A spunky, chubby teenager with gelled hair shot to fame after leading India to glory in the Under-19 World Cup at Kuala Lumpur in early 2008. In an Indian team filled with saint-like icons worthy of their own hagiographies, Virat Kohli, with his most un-Indian, 'bad-boy' intensity, would clearly be an outcast.
                     . In the aplayeept Kohli out of the team</p>
                
                </Col>
            </Row>
                <Card style={{backgroundColor:'#3F4156',color:'white'}} className="mb-3">
                  <Card.Body>
                    <h5>Batting Career Summary</h5>
                    <table className='table' style={{color:'white'}}>
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

            <Card style={{backgroundColor:'#3F4156',color:'white'}} className="mb-3">
                <Card.Body>
                    <h5>Bowling Career Summary</h5>
                    <table className='table' style={{color:'white'}}>
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
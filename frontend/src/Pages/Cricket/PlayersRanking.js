import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Nav, Row, Col } from 'react-bootstrap';
import CricSubNavBar from '../../Components/Cricket/CricSubNavBar';


function PlayersRanking() {
    return (
        <>
            <CricSubNavBar></CricSubNavBar>
            <div className='container'>

                {
                    <Card className="mx-auto, w-100 ,my-auto mt-2 mb-2" style={{ backgroundColor: '#3F4156', color: 'white' }}>
                        <Card.Header style={{ backgroundColor: '#696D97' }}>
                            <h2>ICC Rankings</h2>
                            <Nav variant="pills" defaultActiveKey="/PlayerRanking" className='py-2'>
                                <Nav.Item>
                                    <Nav.Link href="#" style={{ color: 'white'}}>Teams</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1" style={{ color: 'white' }}>Players</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={9} md={7}>

                                    <table className='table mt-2' style={{ color: 'white' }}>
                                        <tr>
                                            <th>Position</th>
                                            <th colSpan={2}>Batsman</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td><img src="https://www.cricbuzz.com/a/img/v1/50x50/i1/c184115/marnus-labuschagne.jpg" alt='img'></img></td>
                                            <td><a href="/"><h4>Marnus Labuschagne</h4></a>(Australia)</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><img src="https://www.cricbuzz.com/a/img/v1/50x50/i1/c170658/rohit-sharma.jpg" alt='img'></img></td>
                                            <td><a href="/"><h4>Rohit Sharma</h4></a>(India)</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><img src="https://www.cricbuzz.com/a/img/v1/50x50/i1/c170661/virat-kohli.jpg" alt='img'></img></td>
                                            <td><a href="/"><h4>Virat Kohli</h4></a>(India)</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><img src="https://www.cricbuzz.com/a/img/v1/50x50/i1/c170661/virat-kohli.jpg" alt='img'></img></td>
                                            <td><a href="/"><h4>Virat Kohli</h4></a>(India)</td>
                                        </tr>
                                    </table>
                                </Col>
                                <Col xs={3} md={5}>
                                    <Card style={{ backgroundColor: '#3F4156' }}>
                                        <p class="text-center">Ad section</p>
                                    </Card>

                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                }

            </div>
        </>
    );
}

export default PlayersRanking;
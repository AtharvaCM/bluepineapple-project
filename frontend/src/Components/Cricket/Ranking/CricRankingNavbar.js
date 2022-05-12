import React from 'react';
import {Card,Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function CricRankingNavbar()
{
    return (
        <>
            <div className='container'>
            <Card style={{backgroundColor:'#3F4156',color:'white'}} className='mb-2 mt-2'> 
                <Card.Body>
                    <h3>ICC Cricket Rankings</h3>
                    <Navbar className='py-0' style={{backgroundColor:'#3F4156'}}>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/Cricket/Ranking/Batting' style={{color:'white'}}>Batting</Nav.Link>
                        <Nav.Link as={Link} to='/Cricket/Ranking/Bowling' style={{color:'white'}}>Bowling</Nav.Link>
                       
                    </Nav>
                    </Navbar>
                </Card.Body>
            </Card>
            </div>
        </>
    );
}
export default CricRankingNavbar;
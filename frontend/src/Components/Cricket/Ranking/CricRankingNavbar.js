import React from 'react';
import {Card,Nav,Navbar} from 'react-bootstrap';
import {Link,withRouter} from 'react-router-dom';


const activeTab = (history,path) =>{
  
    if(history.location.pathname === path)
    {
      return {backgroundColor:'white',color:'black'};
    }
  };
  

function CricRankingNavbar({history})
{
    return (
        <>
            <div>
            <Card style={{backgroundColor:'white',color:'black'}} className='mb-2 mt-2'> 
                <Card.Body>
                    <h3>ICC Cricket Rankings</h3>

                    <Nav style={{backgroundColor:'#00796B'}} justify>
                        <Nav.Item>
                            <Nav.Link  as={Link} to="/Cricket/Ranking/Batting" style={activeTab(history,"/Cricket/Ranking/Batting")}>
                            <b style={{color:'black'}}>Batting</b> 
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link  as={Link} to="/Cricket/Ranking/Bowling" style={activeTab(history,"/Cricket/Ranking/Bowling")}>
                            <b style={{color:'black'}}>Bowling</b> 
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {/* <Navbar className='py-0' style={{backgroundColor:'white'}}>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/Cricket/Ranking/Batting' style={{color:'black'}}>Batting</Nav.Link>
                        <Nav.Link as={Link} to='/Cricket/Ranking/Bowling' style={{color:'black'}}>Bowling</Nav.Link>
                       
                    </Nav>
                    </Navbar> */}
                </Card.Body>
            </Card>
            </div>
        </>
    );
}
export default withRouter(CricRankingNavbar);
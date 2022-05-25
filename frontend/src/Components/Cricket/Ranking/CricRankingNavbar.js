import React from 'react';
import {Card,Nav} from 'react-bootstrap';
import {Link,withRouter} from 'react-router-dom';


const activeTab = (history,path) =>{
  
    if(history.location.pathname === path)
    {
      return {backgroundColor:'#00796B',color:'black'};
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

                    <Nav style={{backgroundColor:'white'}} justify>
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
                </Card.Body>
            </Card>
            </div>
        </>
    );
}
export default withRouter(CricRankingNavbar);
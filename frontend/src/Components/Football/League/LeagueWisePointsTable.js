import { React, useState, useEffect } from 'react'
import footballPointsTable from '../../../Api/footballApi/footballPointsTable'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap';

function LeagueWisePointsTable({ e }) {
  

  const [pointsTable, setpointsTable] = useState([])

  useEffect(() => {
    const key = e.location.state.e.league_key
    footballPointsTable(key).then((data) => {
     
      setpointsTable(data.standings)
    }).catch(err => console.log(err))
  }, [])


 

  return (
    <>
      <Card>
        <h3 className='mt-4 mb-4' style={{ textAlign: 'center', fontWeight: 'bold' }}>{e.location.state.e.league_name} Points Table</h3>

        <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Played</th>
              <th>Won</th>
              <th>Draw</th>
              <th>Lost</th>
              <th>Fouls</th>
              <th>Goal Difference</th>
              <th>Points</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          {pointsTable.map((data, key) => {
           
            return (
              <>
              <tbody>
              <tr>
                <td>{data.standing_place}</td>
                <td>{data.standing_team}</td>
                <td>{data.standing_P}</td>
                <td>{data.standing_W}</td>
                <td>{data.standing_D}</td>
                <td>{data.standing_L}</td>
                <td>{data.standing_F}</td>
                <td>{data.standing_GD}</td>
                <td>{data.standing_PTS}</td>
                <td>{new Date(data.standing_updated).toLocaleString()}</td>
              </tr>
              </tbody>
              </>
              )
          })}
          <tbody>

          </tbody>
        </Table>
        </Container>

      </Card>


    </>
  )
}

export default LeagueWisePointsTable
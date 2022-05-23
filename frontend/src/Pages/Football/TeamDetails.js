import { React} from 'react'
import { useLocation } from 'react-router-dom'
import { Card, Image, Table } from 'react-bootstrap'

function TeamDetails() {

    const location = useLocation();
    const team = location.state;
    console.log(team.data.team_name);
    return (
        <>
            <Card className='mt-2'>
                <Image src={team.data.team_logo} style={{ height: '150px', width: '150px', alignSelf: 'center' }} classname="mt-2 mb-2"></Image>
                <Card.Title style={{ textAlign: 'center' }}>{team.data.team_name} Football Club</Card.Title>
            </Card>

            <Card className='mt-2'>

                <Card.Title style={{fontSize:'2rem'}} classname="mt-2 mb-2 ms-2">Tournament Squad</Card.Title>
                <Table striped hover>
                    <thead>
                        <tr style={{fontWeight:'bold'}}>
                            <td>Sr.no</td>
                            <td>Name</td>
                            <td>Number</td>
                            <td>Country</td>
                            <td>Player Type</td>
                            <td>Player age</td>
                            <td>Matches Played</td>
                            <td>Goals Scored</td>
                            <td>Yellow cards</td>
                            <td>Red cards</td>
                        </tr>
                        </thead>
                        <tbody>
                        {team.data.players.map((data, index) => {
                            console.log(data.player_name);
                            return (
                                <>
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{data.player_name === undefined || data.player_name === null || data.player_name === ''?'NA':data.player_name}</td>
                                        <td>{data.player_number === undefined || data.player_number === null || data.player_number === ''?'NA':data.player_number}</td>
                                        <td>{data.player_country === undefined || data.player_country === null || data.player_country === ''?'NA':data.player_country}</td>
                                        <td>{data.player_type === undefined || data.player_type === null || data.player_type === ''?'NA':data.player_type}</td>
                                        <td>{data.player_age === undefined || data.player_age === null || data.player_age === ''?'NA':data.player_age}</td>
                                        <td>{data.player_match_played === undefined || data.player_match_played === null || data.player_match_played === ''?'NA':data.player_match_played}</td>
                                        <td>{data.player_goals === undefined || data.player_goals  == null || data.player_goals === ''?'NA':data.player_goals}</ td>
                                        <td>{data.player_yellow_cards === undefined || data.player_yellow_cards === null || data.player_yellow_cards === ''?'NA':data.player_yellow_cards}</td>
                                        <td>{data.player_red_cards === undefined || data.player_red_cards === null || data.player_red_cards === ''?'NA':data.player_red_cards}</td>
                                    </tr>
                                </>
                            )
                        })}
                        </tbody>
                    
                </Table>
            </Card>
        </>
    )
}

export default TeamDetails
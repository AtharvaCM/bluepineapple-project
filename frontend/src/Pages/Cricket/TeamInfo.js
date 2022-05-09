import {React,useState} from 'react'
import { useLocation} from 'react-router-dom';
import {Card} from 'react-bootstrap'
import Schedule from './Schedule';


function TeamInfo() {
  const [sche, setsche] = useState('')

  const clickHandler=(e) =>{
    setsche(e);
  }


  const location = useLocation();
  //console.log(location.state.id)
  return (
    <>
      <div className="container mt-2 mb-2">
        <Card style={{ backgroundColor: '#51546E' }}>
          <Card.Header>
            <Card.Text style={{ fontSize: '30px', fontWeight: 'bold' }}>{location.state.id}</Card.Text>
            <span className='me-5 teamSpan' onClick={()=>clickHandler('indian Cricket Team schedule')}>
              Schedule
            </span>
            <span className='me-5 teamSpan' onClick={()=>clickHandler('Spain')}>
              News
            </span>
            <span className='me-5 teamSpan' onClick={()=>clickHandler('England')}>
              Player
            </span>
            <span className='me-5 teamSpan' onClick={()=>clickHandler('Norway')}>
              Stats
            </span>
          </Card.Header>
        </Card>
      </div>
      <Schedule team={sche}></Schedule>
    </>
  )
}

export default TeamInfo
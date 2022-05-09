import React from 'react'
import { Card } from 'react-bootstrap'
import TeamSubNavBar from '../../Components/Cricket/TeamSubNavBar'
import CricSubNavBar from '../../Components/Cricket/CricSubNavBar'

import {useHistory} from 'react-router-dom'


function MensTeam() {
    let history = useHistory();
    const routeChange = (e) => {
        console.log(e);
        history.push({
            pathname:'/Cricket/Team/TeamInfo',
            state:{id:e} //passing prop to the component
        });
        //console.log(history.push('/'))
    }

    return (
        <>
            <CricSubNavBar></CricSubNavBar>
            <TeamSubNavBar></TeamSubNavBar>
            <div className='container'>
                <Card style={{ backgroundColor: '#3F4156', color: 'white' }} className='mb-2 mt-2'>
                    <div className="grid">
                        
                            <div className='gridItem mt-4 mb-2 ms-2' onClick={()=>routeChange('Indian National Team')}>
                                <img className="gridImage" src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png' alt='logo'>
                                </img>
                                <b className='ms-2' style={{ fontSize: '25px' }}>India</b>
                            </div>

                        

                        <div className='gridItem mt-4 mb-2 ms-2' onClick={()=>routeChange('England National Team')}>
                            <img className="gridImage" src='https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg' alt='logo'></img>
                            <b className='ms-2' style={{ fontSize: '25px' }}>England</b>
                        </div>

                        <div className='gridItem mt-4 mb-2 ms-2' onClick={()=>routeChange('Australian National Team')}>
                            <img className="gridImage" src='https://cdn4.vectorstock.com/i/1000x1000/88/78/australia-flag-vector-15078878.jpg' alt='logo'></img>
                            <b className='ms-2' style={{ fontSize: '25px' }}>Australia</b>
                        </div>

                        <div className='gridItem mt-4 mb-2 ms-2' onClick={()=>routeChange('Sri Lankan National Team')}>
                            <img className="gridImage" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1200px-Flag_of_Sri_Lanka.svg.png' alt='logo'></img>
                            <b className='ms-2' style={{ fontSize: '25px' }}>Sri Lanka</b>
                        </div>
                        <div className='gridItem mt-4 mb-2 ms-2'>
                            <img className="gridImage" src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png' alt='logo'>
                            </img>
                            <b className='ms-2' style={{ fontSize: '25px' }}>India</b>
                        </div>

                        <div className='gridItem mt-4 mb-2 ms-2'>
                            <img className="gridImage" src='https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg' alt='logo'></img>
                            <b className='ms-2' style={{ fontSize: '25px' }}>England</b>
                        </div>

                        <div className='gridItem mt-4 mb-2 ms-2'>
                            <img className="gridImage" src='https://cdn4.vectorstock.com/i/1000x1000/88/78/australia-flag-vector-15078878.jpg' alt='logo'></img>
                            <b className='ms-2' style={{ fontSize: '25px' }}>Australia</b>
                        </div>

                        <div className='gridItem mt-4 mb-2 ms-2'>
                            <img className="gridImage" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/1200px-Flag_of_Sri_Lanka.svg.png' alt='logo'></img>
                            <b className='ms-2' style={{ fontSize: '25px' }}>Sri Lanka</b>
                        </div>

                    </div>

                </Card>



            </div>
        </>
    )
}

export default MensTeam
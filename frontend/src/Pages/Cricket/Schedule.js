import {React,useEffect,useState} from 'react'
import {Card} from 'react-bootstrap'
import {player} from '../../Api/PlayerApi'

function Schedule({team}) {
  const [play, setplay] = useState([])
  //const [sort, setsort] = useState([])
    useEffect(() => {
      player().then((data)=>{
        setplay(data.data);
      }).catch(err=>console.log(err))
    }, []);

    console.log(play);
    let d=[];

    if(team){
      play.map((data,index)=>{
          
          if(data.country === team)
          {
            d.push(data)
          }
          return d;
      })
    }

    console.log(d);
    
    
    
  return (
   <>
   <div className='container'>
                <Card style={{ backgroundColor: '#3F4156', color: 'white' }} className='mb-2'>
                    {
                      d.map((data,index)=>{
                        return(
                          <>
                          <h5 key={index}>{data.id}</h5>
                          <h5 key={index}>{data.name}</h5>
                          <h5 key={index}>{data.country}</h5>
                          </>
                        
                        )
                      })
                    }

                </Card>



            </div>
   </>
  )
}

export default Schedule
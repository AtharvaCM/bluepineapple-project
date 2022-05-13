import{ React,useEffect} from 'react'
import footBallCurrentMatches from '../../Api/footballApi/footBallCurrentMatches'

function CurrentMatches() {
    useEffect(() => {
      footBallCurrentMatches().then((data)=>{
          console.log(data)
      })
    }, [])
    
  return (
    <div>CurrentMatches</div>
  )
}

export default CurrentMatches
import React from 'react'
import '../../Resources/Styles/Gallery.css'
import FootballSubNavBar from './FootballSubNavBar'
import FootballGalleryAPI from '../../Api/footballApi/FootballGalleryAPI'

function Gallery() {
 // const [first, setfirst] = useState(FootballGalleryAPI)
  console.log('hello from football gallery')
  //console.log(first);
  return (
    <>
      <FootballSubNavBar></FootballSubNavBar>
      <h1>The Football Gallery</h1>
      <p className='galleryPara'>Some memories to cherish...</p>
      <div className="masonry">
      {FootballGalleryAPI.map(Team => {
          return (
            <div className="item" key={Team.id} style={{color:'white'}}>   
             <h5>{Team.title}</h5>
             <img src={Team.img_url} alt='img'/>
             </div>
          )
        })
      }
      </div>
      
    </>
  )
}

export default Gallery
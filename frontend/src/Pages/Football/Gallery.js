import React from 'react'
import '../../Resources/Styles/Gallery.css'
import FootballSubNavBar from './FootballSubNavBar'
import gallery from '../../Api/footballApi/gallery'

function Gallery() {
  console.log('hello from football gallery')
  console.log(gallery);
  return (
    <>
      <FootballSubNavBar></FootballSubNavBar>
      <h1>The Football Gallery</h1>
      <p className='galleryPara'>Some memories to cherish...</p>
      <div className="masonry">
      {gallery.map(Team => {
          return (
            <div className="item" key={Team.id} style={{color:'white'}}>   
             <h5>{Team.Title}</h5>
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
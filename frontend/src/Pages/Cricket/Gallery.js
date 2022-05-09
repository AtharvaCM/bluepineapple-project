import React from 'react'
import CricSubNavBar from '../../Components/Cricket/CricSubNavBar'
import '../../Resources/Styles/Gallery.css'

function Gallery() {
  console.log('hello from gallery')
  return (
    <>
      <CricSubNavBar></CricSubNavBar>

      <h1>The Cricket Gallery</h1>
      <p className='galleryPara'>Some memories to cherish...</p>
      <div className="masonry">
        <div className="item">
          1
          <img src="https://www.cricket.com.au/-/media/News/2022/03/19lanning_aussies.ashx" alt='img'/>
        </div>
        <div className="item">
          2
          <img src="https://cricketaddictor.gumlet.io/wp-content/uploads/2021/08/Cricket-bat-ball.jpg?compress=true&quality=80&w=1024&dpr=2.6" alt='img' />
        </div>
        <div className="item">
          3
          <img src="https://c.ndtvimg.com/2021-12/md4lks1g_virat-kohli_625x300_12_December_21.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605" alt='img'/>
        </div>
        <div className="item">
          4
          <img src="https://p.imgci.com/db/PICTURES/CMS/328400/328415.jpg" alt='img'/>
        </div>
        <div className="item">
          5
          <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_05/3445447/210127-aaron-jones-bats-for-team-usa-men-in-dubai-vs-uae-ew-1215p.jpg" alt='img'/>
        </div>
        <div className="item">
          6
          <img src="https://e0.365dm.com/22/03/768x432/skysports-cricket-england-australia_5705100.jpg?20220313155856" alt='img' />
        </div>
        <div className="item">
          7
          <img src="https://images.news18.com/ibnlive/uploads/2021/07/1627630986_india-cricket-team-ap-1600-1600x900.jpg" alt='img'/>
        </div>
        <div className="item">
          8
          <img src="https://www.mykhel.com/img/2022/04/rohit-mayank-mi-pbks-1649747213.jpg" alt='img'/>
        </div>
        <div className="item">
          9
          <img src="https://c.cricketpakistan.com.pk/images/posts/cover_1651387304Untitled-1.jpg" alt='img'/>
        </div>
        <div className="item">
          10
          <img src="https://resources.pulse.icc-cricket.com/photo-resources/2022/05/02/d63479b3-f408-4bb9-ae37-56e1c4bf5b5f/Mitch-Marsh-batting.jpg?width=600&height=338" alt='img'/>
        </div>
        <div className="item">
          11
          <img src="https://e3.365dm.com/21/07/1600x900/skynews-ben-stokes-england_5463042.jpg?20210730174749" alt='img'/>
        </div>
        <div className="item">
          12
          <img src="https://static01.nyt.com/images/2021/01/20/world/19India-cricket-print/19India-cricket1-videoSixteenByNineJumbo1600.jpg"  alt='img' />
        </div>
        <div className="item">
          13
          <img src="https://static01.nyt.com/images/2021/01/20/world/19India-cricket-print/19India-cricket1-videoSixteenByNineJumbo1600.jpg" alt='img'  />
        </div>
        <div className="item">
          14  
          <img src="https://static01.nyt.com/images/2021/01/20/world/19India-cricket-print/19India-cricket1-videoSixteenByNineJumbo1600.jpg"  alt='img' />
        </div>
        <div className="item">
          15  
          <img src="https://static01.nyt.com/images/2021/01/20/world/19India-cricket-print/19India-cricket1-videoSixteenByNineJumbo1600.jpg"  alt='img' />
        </div>
        <div className="item">
          16  
          <img src="https://static01.nyt.com/images/2021/01/20/world/19India-cricket-print/19India-cricket1-videoSixteenByNineJumbo1600.jpg"  alt='img' />
        </div>
        <div className="item">
          17  
          <img src="https://static01.nyt.com/images/2021/01/20/world/19India-cricket-print/19India-cricket1-videoSixteenByNineJumbo1600.jpg"  alt='img' />
        </div>
        <div className="item">
          18  
          <img src="https://static01.nyt.com/images/2021/01/20/world/19India-cricket-print/19India-cricket1-videoSixteenByNineJumbo1600.jpg"  alt='img' />
        </div>
      </div>
      
    </>
  )
}

export default Gallery
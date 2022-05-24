import React, { useState, useEffect } from 'react'
import '../../Resources/Styles/Gallery.css'
import FootballSubNavBar from './FootballSubNavBar'
import Spinner from '../../Components/Spinner'
import axios from 'axios'
import ReactPaginate from 'react-paginate';

function Gallery() {

  const [football, setfootball] = useState(null)

  useEffect(() => {
    axios.get("https://api.unsplash.com/search/photos?page=1&per_page=30&query=football&client_id=J-xAGd8R7QHuRsKiznwL6R-yhGK8-X64-Oj0HG1A9Q0").then((response) => {

      setfootball(response.data.results)
    }).catch(err => console.log(err))

  }, [])


  const fetchimages = async(current_page)=>{

    const res = await fetch(`https://api.unsplash.com/search/photos?page=${current_page}&per_page=30&query=football&client_id=J-xAGd8R7QHuRsKiznwL6R-yhGK8-X64-Oj0HG1A9Q0`);
    const data = await res.json();
    return data.results;
  }


  const handleClick = async(data) => {
    let current_page = data.selected + 1;
    const imageFromServer = await fetchimages(current_page);
    setfootball(imageFromServer);
  }


  return (
    <>
      <FootballSubNavBar></FootballSubNavBar>
      <h1>The Football Gallery</h1>
      <p className='galleryPara'></p>


      <ReactPaginate
        previousLabel={'<<prev'}
        nextLabel={'Next>>'}
        breakLabel={'...'}
        pageCount={155}
        marginPagesDisplayed={5}
        onPageChange={handleClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />

      <div className="masonry">
        {football === null ? (<Spinner></Spinner>) : football.map((data, index) => {
          return (
            <div className="item" key={index}>
              <h5>{data.alt_description}</h5>
              <img src={data.urls.small} alt='img' />
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default Gallery
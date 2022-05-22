import { React, useEffect, useState } from "react";
import CricSubNavBar from "../../Components/Navbar/CricSubNavBar";
import "../../Resources/Styles/Gallery.css";
import axios from 'axios'
import Spinner from "../../Components/Spinner";
import ReactPaginate from "react-paginate";

function Gallery() {
  const [cricket, setcricket] = useState(null)

  useEffect(() => {
    axios.get("https://api.unsplash.com/search/photos?page=1&per_page=30&query=cricket&client_id=J-xAGd8R7QHuRsKiznwL6R-yhGK8-X64-Oj0HG1A9Q0").then((response) => {

      setcricket(response.data.results)
    }).catch(err => console.log(err))

  }, [])



  const fetchimages = async(current_page)=>{

    const res = await fetch(`https://api.unsplash.com/search/photos?page=${current_page}&per_page=30&query=cricket&client_id=J-xAGd8R7QHuRsKiznwL6R-yhGK8-X64-Oj0HG1A9Q0`);
    const data = await res.json();
    return data.results;
  }


  const handleClick = async(data) => {
    let current_page = data.selected + 1;
    const imageFromServer = await fetchimages(current_page);
    setcricket(imageFromServer);
  }


  return (
    <>
      <CricSubNavBar></CricSubNavBar>

      <h1>The Cricket Gallery</h1>

      <ReactPaginate
        previousLabel={'<<prev'}
        nextLabel={'Next>>'}
        breakLabel={'...'}
        pageCount={62}
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
        {cricket === null ? (<Spinner></Spinner>) : cricket.map((data, index) => {
          return (
            <div className="item" key={index}>
              <h5>{data.alt_description}</h5>
              <img src={data.urls.small} alt='img' />
            </div>
          )
        })
        }
      </div>

      <ReactPaginate
        previousLabel={'<<prev'}
        nextLabel={'Next>>'}
        breakLabel={'...'}
        pageCount={62}
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
    </>
  );
}

export default Gallery;

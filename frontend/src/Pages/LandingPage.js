import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "../Components/Spinner";
import axios from 'axios'

function LandingPage() {

  const [image,setimage] = useState(null)
  const [cricket,setcricket] = useState(null)


  


  useEffect(() => {

   
    axios.get("https://api.unsplash.com/search/photos?page=1&per_page=10&query=sports&client_id=J-xAGd8R7QHuRsKiznwL6R-yhGK8-X64-Oj0HG1A9Q0").then((response)=>{
    
      setimage(response.data.results)
    }).catch(err => console.log(err))
  
    axios.get("https://images.unsplash.com/photo-1546608235-3310a2494cdf?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMzA5Njl8MHwxfHNlYXJjaHw3fHxmb290YmFsbHxlbnwwfHx8fDE2NTM0MTQ2NjM&ixlib=rb-1.2.1&q=80").then((response)=>{
     
      setcricket(response.data.results)
    }).catch(err => console.log(err))
  
  }, []);

  
  if (image === null || cricket ===  null) {
    return (
      <>
        <div className="container align-middle">
          <Spinner></Spinner>
        </div>
      </>
    );
  } else {
   
    return (
      <>
        <Carousel>
          {image.map((data, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={data.urls.regular}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  {<p>{data.description}</p>}
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>

        {/* <Carousel>
          {cricket.map((data, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={data.urls.regular}
                  alt="Third slide"
                />

                <Carousel.Caption>
                 
                  {<p>{data.description}</p>}
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel> */}
      </>
    );
  }
}

export default LandingPage;

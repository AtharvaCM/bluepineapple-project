import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
//import logo from '../Resources/Images/Basketball.gif';
import NewsInfo from "../Api/NewsAPI";
import Spinner from "../Components/Spinner";
import axios from 'axios'

function LandingPage() {
  //const [news, setnews] = useState(null);

  const [image,setimage] = useState(null)
  const [cricket,setcricket] = useState(null)


  


  useEffect(() => {

   
    axios.get("https://api.unsplash.com/search/photos?page=1&per_page=3&query=football&client_id=J-xAGd8R7QHuRsKiznwL6R-yhGK8-X64-Oj0HG1A9Q0").then((response)=>{
    
      setimage(response.data.results)
    }).catch(err => console.log(err))
  
    axios.get("https://api.unsplash.com/search/photos?page=1&per_page=3&query=cricket&client_id=J-xAGd8R7QHuRsKiznwL6R-yhGK8-X64-Oj0HG1A9Q0").then((response)=>{
     
      setcricket(response.data.results)
    }).catch(err => console.log(err))
  

  
    // NewsInfo()
    //   .then((data) => {
    //     console.log("data", data);
    //     setnews(data.articles);
    //     //console.log(data.articles);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  console.log(image);
  console.log(cricket);

  if (image === null || cricket ===  null) {
    return (
      <>
        <div className="container align-middle">
          <Spinner></Spinner>
        </div>
      </>
    );
  } else {
    //console.log(news.slice(3, 6));
    //let limit = image.slice(0, 3);
    //let limitcricket = cricket.slice(0,3);
    return (
      <>
        <Carousel>
          {image.map((data, index) => {
            //console.log('landing data',data)
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

        <Carousel>
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
        </Carousel>
      </>
    );
  }
}

export default LandingPage;

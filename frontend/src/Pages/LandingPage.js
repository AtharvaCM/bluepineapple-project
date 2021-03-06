import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Resources/Styles/main.css";
import Spinner from "../Components/Spinner";
import axios from "axios";
import myVideo from "../Resources/Videos/sports.mp4";

function LandingPage() {
  const [image, setimage] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/search/photos?page=1&per_page=30&query=sports&client_id=J-xAGd8R7QHuRsKiznwL6R-yhGK8-X64-Oj0HG1A9Q0"
      )
      .then((response) => {
        setimage(response.data.results);
      })
      .catch((err) => console.log(err));

    // axios.get("https://api.unsplash.com/search/photos?page=1&per_page=3&query=cricket&client_id=J-xAGd8R7QHuRsKiznwL6R-yhGK8-X64-Oj0HG1A9Q0").then((response)=>{

    //   setcricket(response.data.results)
    // }).catch(err => console.log(err))
  }, []);

  if (image === null) {
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
        <div className="landing-video-container">
          <video autoPlay loop muted className="landing-video" width="100">
            <source src={myVideo} type="video/mp4" />
          </video>
        </div>
      </>
    );
  }
}

export default LandingPage;

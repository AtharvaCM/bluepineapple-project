// import React, { useState, useEffect } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Spinner from "../Components/Spinner";
// import axios from "axios";

// function LandingPage() {
//   const [image, setimage] = useState(null);
//   const [loading, setLoading] = useState(true);
//   // const [cricket,setcricket] = useState(null)

//   useEffect(() => {
//     axios
//       .get(
//         "https://api.unsplash.com/search/photos?page=1&per_page=30&query=sports&client_id=J-xAGd8R7QHuRsKiznwL6R-yhGK8-X64-Oj0HG1A9Q0"
//       )
//       .then((response) => {
//         setimage(response.data.results);
//         setLoading(!loading);
//       })
//       .catch((err) => console.log(err));

//     // axios.get("https://api.unsplash.com/search/photos?page=1&per_page=3&query=cricket&client_id=J-xAGd8R7QHuRsKiznwL6R-yhGK8-X64-Oj0HG1A9Q0").then((response)=>{

//     //   setcricket(response.data.results)
//     // }).catch(err => console.log(err))
//   }, [loading]);

//   if (image === null) {
//     return (
//       <>
//         <div className="container text-center mt-5">
//           <Spinner loading={loading}></Spinner>
//         </div>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <div>
//           <Carousel>
//             {image.map((data, index) => {
//               return (
//                 <Carousel.Item key={index} interval={2000}>
//                   <img
//                     className="d-block w-100"
//                     src={data.urls.regular}
//                     alt="Third slide"
//                     style={{ height: "650px" }}
//                   />

//                   <Carousel.Caption>
//                     {<p>{data.description}</p>}
//                   </Carousel.Caption>
//                 </Carousel.Item>
//               );
//             })}
//           </Carousel>
//         </div>
//       </>
//     );
//   }
// }

// export default LandingPage;



import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import myVideo from "../Resources/Videos/sports.mp4";

function LandingPage() {
  return (
    <Container maxWidth="" className="landing-container">
      <Box sx={{ bgcolor: "#cfe8fc" }} />
      <div className="landing-video-container">
        <video autoPlay loop muted className="landing-video" width="100">
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
    </Container>
  );
}

export default LandingPage;
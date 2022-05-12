import { React, useState, useEffect } from "react";
import CricSubNavBar from "../../Components/Cricket/CricSubNavBar";
import { Card, Container, Button } from "react-bootstrap";
import NewsInfo from "../../Api/NewsApi";
import Spinner from "../../Components/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import {motion} from 'framer-motion'

function News() {
  const [news, setnews] = useState(null);

  useEffect(() => {
    NewsInfo()
      .then((data) => {
        setnews(data.articles);
        console.log(data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  if (news === null) {
    return <Spinner></Spinner>;
  } else {
    return (
      <>
        <CricSubNavBar></CricSubNavBar>
        <Container className="mt-2 mb-2">
          <motion.h1 initial={{x:-250,y:250}} animate={{x:0 ,y:0}} transition={{duration:2,delay:0.5}}>Top HeadLines</motion.h1>
          <p className="galleryPara"></p>

          {news.map((data, index) => {
            return (
              
              <motion.div className="container" key={index} whileHover={{scale:1.1}}>                <Card className="mt-2">
                  <Card.Body>
                    <Card.Text style={{color:'black'}}>
                      {data.description}
                    </Card.Text>
                    <Button target="_blank" href={data.url}>Reaad more...</Button>
                  </Card.Body>
                  <Card.Img variant="bottom" src={data.urlToImage} />
                </Card>
              </motion.div>
             
            );
          })}
        </Container>
      </>
    );
  }
}

export default News;

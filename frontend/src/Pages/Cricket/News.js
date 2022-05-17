import { React, useState, useEffect } from "react";
import CricSubNavBar from "../../Components/Navbar/CricSubNavBar";
import { Card, Container, Button } from "react-bootstrap";
import NewsInfo from "../../Api/NewsAPI";
import Spinner from "../../Components/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

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

        <Container className="mt-4 mb-2">
          <Container >
            <Container >
            <h2 style={{textAlign:'center'}}>Top Headlines</h2>
            </Container>

            {news.map((data, index) => {
              return (
                <Container>
                  {" "}
                  <Card className="mt-2">
                    <Card.Body>
                      <Card.Text style={{ color: "black" }}>
                        {data.description}
                      </Card.Text>
                      <Button target="_blank" href={data.url}>
                        Reaad more...
                      </Button>
                    </Card.Body>
                    <Card.Img variant="bottom" src={data.urlToImage} />
                  </Card>
                </Container>
              );
            })}
          </Container>
        </Container>
      </>
    );
  }
}

export default News;

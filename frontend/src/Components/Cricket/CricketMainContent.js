import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsInfo from "../../Api/NewsAPI";
import SeriesApi from "../../Api/SeriesAPI";
import { useEffect, useState } from "react";
import { SiStarship } from "react-icons/si";
import { GiFinishLine } from "react-icons/gi";
import {useHistory} from 'react-router-dom'

function CricketMainContent() {
  const [news, setnews] = useState(null);
  const [series, setseries] = useState(null);

  useEffect(() => {
    NewsInfo()
      .then((data) => {
        setnews(data.articles);
       
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    SeriesApi()
      .then((data, index) => {
        setseries(data.series);
      })
      .catch((err) => console.log(err));
  }, []);

 

let history = useHistory();
const routeChange = ()=>{
  history.push({
    pathname: "/Cricket/Series",
    
  });
}



  if (news === null) {
    return <></>;
  } else {
    if (series == null) {
      return <></>;
    } else {
      return (
        <>
          <Container fluid className="mt-2">
            <Row>
              <Col md={4}>
                {series.map((data, index) => {
                  return (
                    <Card
                      className="mt-2"
                      style={{ backgroundColor: "white",cursor:'pointer'}}
                      key={index}
                      onClick={()=>routeChange()}
                    >
                     
                        <Card.Header
                          style={{ color: "black", fontWeight: "bold" }}
                        >
                          {data.name}
                        </Card.Header>
                        <Card.Body>
                        <Card.Text style={{ color: "black" }}>
                          <SiStarship /> Star Date : {data.startDate}
                        </Card.Text>
                        <Card.Text style={{ color: "black" }}>
                          <GiFinishLine /> End Date : {data.endDate}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Col>

              <Col md={8}>
                {news.map((data, index) => {
                  return (
                    <Card
                      key={index}
                      className="mt-2"
                      style={{ backgroundColor: "white" }}
                    >
                      <Card.Img variant="top" src={data.urlToImage} />
                      <Card.Body>
                        <Card.Title style={{ color: "black" }}>
                          {data.title}
                        </Card.Title>
                        <Card.Text style={{ color: "black" }}>
                          {data.description}
                        </Card.Text>
                        <Button
                          variant="primary"
                          href={data.url}
                          target="_blank"
                        >
                          Read More...
                        </Button>
                      </Card.Body>
                    </Card>
                  );
                })}
              </Col>
            </Row>
          </Container>
        </>
      );
    }
  }
}

export default CricketMainContent;

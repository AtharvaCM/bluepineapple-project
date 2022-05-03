import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewsInfo from '../../Api/NewsApi'
import SeriesApi from '../../Api/SeriesApi'
import { useEffect, useState } from 'react'


function CricketMainContent() {
    const [news, setnews] = useState(null)
    const [series, setseries] = useState(null)

    useEffect(() => {
        NewsInfo().then((data) => {
            setnews(data.articles);
            console.log(data.articles);

        }).catch((err) => console.log(err));
    }, [])

    useEffect(() => {
        SeriesApi().then((data, index) => {
            setseries(data.data)
        }).catch((err) => console.log(err))
    }, [])

    console.log(series)



    if (news === null) {
        return (
            <>

            </>
        )
    }
    else {
        if (series == null) {
            return (
                <>

                </>
            )
        }
        else {
            return (
                <>
                    <Container fluid className='mt-2'>
                        <Row>
                            <Col md={4} >
                                {series.map((data, index) => {
                                    return (
                                        <Card className='mt-2' style={{backgroundColor:'#3F4156'}} key={index}>
                                            <Card.Body>
                                                <Card.Title style={{color:'white'}}>{data.name}</Card.Title>
                                                <Card.Text style={{color:'white'}}>Star Date : {data.startDate}</Card.Text>
                                                <Card.Text style={{color:'white'}}>End Date : {data.endDate}</Card.Text>

                                            </Card.Body>
                                        </Card>

                                    )

                                })

                                }
                            </Col>


                            <Col md={8}>

                                {
                                    news.map((data, index) => {
                                        return (
                                            <Card key={index} className="mt-2" style={{backgroundColor:'#3F4156'}}>
                                                <Card.Img variant="top" src={data.urlToImage} />
                                                <Card.Body>
                                                    <Card.Title style={{color:'white'}}>{data.title}</Card.Title>
                                                    <Card.Text style={{color:'white'}}>
                                                        {data.description}
                                                    </Card.Text>
                                                    <Button variant="primary" href={data.url} target="_blank">Read More...</Button>
                                                </Card.Body>
                                            </Card>

                                        )
                                    })
                                }
                            </Col>
                        </Row>

                    </Container>
                </>
            )


        }


    }




}

export default CricketMainContent
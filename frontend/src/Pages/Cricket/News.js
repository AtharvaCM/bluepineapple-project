import { React, useState, useEffect } from 'react'
import CricSubNavBar from '../../Components/Cricket/CricSubNavBar'
import { Card, Container, Button } from 'react-bootstrap'
import NewsInfo from '../../Api/NewsApi'
import Spinner from '../../Components/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css';

function News() {
    const [news, setnews] = useState(null)

    useEffect(() => {
        NewsInfo().then((data) => {
            setnews(data.articles);
            console.log(data.articles)
        }).catch(err => console.log(err))

    }, [])

    if (news === null) {
        return (

            <Spinner></Spinner>
        )

    }
    else {
        return (
            <>
                <CricSubNavBar></CricSubNavBar>
                <Container className='mt-2 mb-2'>
                    <h1>Top HeadLines</h1>
                    <p className='galleryPara'>Some memories to cherish...</p>

                    {news.map((data, index) => {
                        return (
                            <div className='container'>
                                <Card className="bg-dark text-white mt-2" key={index}>
                                    <Card.Img src={data.urlToImage} alt="Card image" />
                                    <Card.ImgOverlay>
                                        <Card.Title style={{fontSize:'30px'}}>{data.title}</Card.Title>
                                        <Card.Text>
                                            {data.description}
                                        </Card.Text>
                                        <Card.Text>Last updated : {data.publishedAt}</Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                                <Button style={{ backgroundColor: '#71C6DD' }} href={data.url} target="_blank">Read More...</Button>
                            </div>

                        )
                    })
                    }


                </Container>
            </>

        )

    }




}

export default News
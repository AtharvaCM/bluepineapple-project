
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Resources/Images/Basketball.gif';
import NewsInfo from '../Api/NewsApi'

function LandingPage() {
    const [news, setnews] = useState(null)

    useEffect(() => {
        NewsInfo().then((data) => {
            setnews(data.articles);
            //console.log(data.articles);

        }).catch((err) => console.log(err));
    }, [])


    if (news === null) {
        return (
            <>
                <div className='container align-middle' >
                    {<img src={logo} alt='gif' style={{ marginLeft: "578px" }}></img>}
                </div>

            </>
        )
    }
    else {

        console.log(news.slice(3, 6));
        let limit = news.slice(0, 3)
        let limitFootBall = news.slice(3, 6);
        return (

            <>
                <Carousel>
                    {limit.map((data, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={data.urlToImage}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    {<h3>{data.title}</h3>}
                                    {<p>{data.description}</p>}
                                </Carousel.Caption>
                            </Carousel.Item>

                        )
                    })}
                </Carousel>



                <Carousel>
                    {limitFootBall.map((data, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={data.urlToImage}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    {<h3>{data.title}</h3>}
                                    {<p>{data.description}</p>}
                                </Carousel.Caption>
                            </Carousel.Item>

                        )
                    })}

                </Carousel>
            </>
        )
    }
}

export default LandingPage
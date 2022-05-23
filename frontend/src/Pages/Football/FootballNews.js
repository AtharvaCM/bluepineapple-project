import { React, useState, useEffect } from "react";
import FootballSubNavBar from './FootballSubNavBar'
import FootballNewsApi from "../../Api/footballApi/FootballNewsApi";
import Spinner from "../../Components/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from 'react-bootstrap/Badge'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function News() {
    const [news, setnews] = useState(null);

    useEffect(() => {
        FootballNewsApi()
            .then((data) => {
                setnews(data.articles);
            })
            .catch((err) => console.log(err));
    }, []);



    if (news === null) {
        return (
            <>
                <Spinner></Spinner>
                <FootballSubNavBar></FootballSubNavBar>
            </>
        )


    } else {
        return (
            <>
                <FootballSubNavBar></FootballSubNavBar>
                <Container className="mt-2">

                    <h3 style={{ textAlign: "center" }}>Top Headlines</h3>
                </Container>
                <Container sx={{ mt: 2 }}>

                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {news.map((data, index) => (
                                <Grid item xs={4} key={index}>
                                    <Badge pill bg="danger">{data.source.name}
                                    </Badge>
                                    <Card sx={{ maxWidth: 345 }}>


                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={data.urlToImage}
                                            alt="img"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {data.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {data.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" href={data.url} target="_blank">Read more...</Button>

                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>

            </>
        );
    }
}

export default News;

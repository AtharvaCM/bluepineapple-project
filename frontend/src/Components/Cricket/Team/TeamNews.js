import { React, useState, useEffect } from "react";
import NewsInfo from "../../../Api/NewsAPI";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function TeamNews() {
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
    return null;
  } else {
    return (
      <>
        <Container sx={{ mt: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {news.map((data, index) => (
                <Grid item xs={4} key={index}>
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
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
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

export default TeamNews;

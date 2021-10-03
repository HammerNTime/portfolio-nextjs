import styles from "../styles/AboutMe.module.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

const AboutMe = () => {
  return (
    <div className={styles.mainContainer}>
      <Card sx={{ minWidth: 275, maxWidth:"1075px" , margin:"0 15px"}}>
          <Typography sx={{ fontSize: 25, textAlign:"center", paddingTop:"10px", marginBottom:"-10px",paddingBottom:"5px", backgroundColor:"rgba(230, 230, 230, .3)" }} color="black" gutterBottom>
            Who am I?
          </Typography>
        <CardContent>
          <Typography variant="body2" sx={{textAlign:"center", fontSize:16}}>
            I am a freshly minted full-stack software engineer. Ten years of hospitality experience has left me with a passion for team-oriented work and an acute attention to detail. I&apos;ve translated these passions into clean, effective code that can run alone or be integrated into a greater whole. I am equally content leading or following and hold collaboration, communication, and dedication in the highest regard.
          </Typography>
        </CardContent>
        <CardActions sx={{display:"flex", justifyContent:"center"}}>
          <Typography sx={{textAlign:"center"}} size="small">Checkout My Recent Projects:</Typography>
        </CardActions>
      </Card>

    </div>
  );
}





export default AboutMe
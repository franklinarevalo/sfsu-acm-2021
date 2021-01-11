import React from 'react'
import classNames from 'classnames'
import { Box, withStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import tileData from './tileData'

import {
  Grid,
  GridList,
  GridListTile,
  Typography,
  isWidthUp,
  withWidth,
  Avatar,
} from '@material-ui/core'

import affan_image from './data/affan.jpg'
import franklyn_image from './data/franklyn.jpg'
import mallissa_image from './data/mallissa.jpg'
import siddhi_image from './data/siddhi.png'
import wameedh_image from './data/wameedh.jpg'
import yennie_image from './data/yennie.jpg'
import github1 from './data/eventPictures/githubworkshop.PNG'
import github2 from './data/eventPictures/github2.PNG'
import github3 from './data/eventPictures/gitworkshop.PNG'
import group from './data/eventPictures/group.PNG'



const styles = (theme) => ({
  blogContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    height: 200,
    width: 200,
    margin: theme.spacing(4),
  },
  textBox : {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 750,
  },
}));



 
  const tileData = [
    {
      img: github1,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: github2,
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      img: github3,
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      img: group,
      title: 'Image',
      author: 'author',
      cols: 1,
    },
  ];

const team = [
  {
    name: 'Malissa Murga',
    title: 'President',
    image: mallissa_image,
  },
  {
    name: 'Wameedh Mohammed Ali',
    title: 'Vice President',
    image: wameedh_image,
  },
  {
    name: 'Affaan Ghazzali',
    title: 'Tresurer',
    image: affan_image,
  },
  {
    name: 'Siddhi Rote',
    title: 'Digital Media Chair',
    image: siddhi_image,
  },
  {
    name: 'Franklin Arevalo',
    title: 'Social Outreach Manager',
    image: franklyn_image,
  },
  {
    name: 'Yennie Tran',
    title: 'Social Outreach Manager',
    image: yennie_image,
  },
]

function About(props) {
  const { classes, width } = props

  return (
    <div className="container-fluid lg-p-top">
      <Typography variant="h3" align="center" className="md-mg-bottom">
        About Us
      </Typography>
      {/* <div className={classes.root}>
        <GridList cellHeight={200} className={classes.gridList} cols={3}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div> */}
      <Typography variant="h5" align="center" className="lg-mg-bottom">
      As the largest Computer Science student organization at SF State, ACM at San Francisco State University welcomes students of all backgrounds, interest, and skill levels to join our community and share in our passion for CS. Regardless of major or experience, our events are open to everyone!
      </Typography>
      
      {/* using for space */}
      {/* <Typography variant="h5" align="center" className="lg-mg-bottom"></Typography> */}
      
      <Typography variant="h3" align="center" className="md-mg-bottom">
        Meet Our Team
      </Typography>
      <div className="container-fluid">
        <Grid container justify={'center'} spacing={5}>
          {team.map((element) => (
            <Grid
              item
              md={4}
              data-aos="zoom-in-up"
              data-aos-delay={
                isWidthUp('md', width) ? element.mdDelay : element.smDelay
              }
              key={element.name}
            >
              <div className={classes.card}>
                <Avatar
                  alt="Example Photo"
                  src={element.image}
                  className={classes.avatar}
                />
                <Typography variant="h5" gutterBottom>
                  {element.name}
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  {element.title}
                </Typography>
                {element.description && (
                  <Typography variant="body1" gutterBottom>
                    {element.description}
                  </Typography>
                )}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default withWidth()(withStyles(styles, { withTheme: true })(About))

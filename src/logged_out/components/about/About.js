import React from 'react'
import classNames from 'classnames'
import { Box, withStyles } from '@material-ui/core'
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  Avatar,
} from '@material-ui/core'

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
})

const team = [
  {
    name: 'Malissa Murga',
    title: 'President',
    image: 'https://sfsu-acm.club/static/media/DEFAULT.0a86d1fe.png',
  },
  {
    name: 'Wameedh Mohammed Ali',
    title: 'Vice President',
    image: 'https://sfsu-acm.club/static/media/DEFAULT.0a86d1fe.png',
  },
  {
    name: 'Affaan Ghazzali',
    title: 'Tresurer',
    image: 'https://sfsu-acm.club/static/media/DEFAULT.0a86d1fe.png',
  },
  {
    name: 'Siddhi Rote',
    title: 'Digital Media Chair',
    image: 'https://sfsu-acm.club/static/media/DEFAULT.0a86d1fe.png',
  },
  {
    name: 'Franklin Arevalo',
    title: 'Social Outreach Manager',
    image: 'https://sfsu-acm.club/static/media/DEFAULT.0a86d1fe.png',
  },
  {
    name: 'Yennie Tran',
    title: 'Social Outreach Manager',
    image: 'https://sfsu-acm.club/static/media/DEFAULT.0a86d1fe.png',
  },
  
]

function About(props) {
  const { classes, width } = props

  return (
    <div className="container-fluid lg-p-top">
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        About Us
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
              key={element.headline}
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

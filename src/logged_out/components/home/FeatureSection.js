import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles,
} from '@material-ui/core'
import CodeIcon from '@material-ui/icons/Code'
import BuildIcon from '@material-ui/icons/Build'
import ComputerIcon from '@material-ui/icons/Computer'
import BarChartIcon from '@material-ui/icons/BarChart'
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import CloudIcon from '@material-ui/icons/Cloud'
import MeassageIcon from '@material-ui/icons/Message'
import CancelIcon from '@material-ui/icons/Cancel'
import calculateSpacing from './calculateSpacing'
import FeatureCard from './FeatureCard'

const iconSize = 30

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  avatar: {
    height: 200,
    width: 200,
    margin: theme.spacing(4),
  },
})

const features = [
  {
    color: '#00C853',
    headline: 'Resume Building',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <BuildIcon style={{ fontSize: iconSize }} />,
    mdDelay: '0',
    smDelay: '0',
  },
  {
    color: '#6200EA',
    headline: 'Plan Events',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: '200',
    smDelay: '200',
  },
  {
    color: '#0091EA',
    headline: 'Outreach',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <MeassageIcon style={{ fontSize: iconSize }} />,
    mdDelay: '400',
    smDelay: '0',
  },
  {
    color: '#d50000',
    headline: 'Research',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <ComputerIcon style={{ fontSize: iconSize }} />,
    mdDelay: '0',
    smDelay: '200',
  },
  {
    color: '#DD2C00',
    headline: 'Feature 5',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <BarChartIcon style={{ fontSize: iconSize }} />,
    mdDelay: '200',
    smDelay: '0',
  },
  {
    color: '#64DD17',
    headline: 'Network',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: '400',
    smDelay: '200',
  },
  {
    color: '#304FFE',
    headline: 'Share Resources',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <CloudIcon style={{ fontSize: iconSize }} />,
    mdDelay: '0',
    smDelay: '0',
  },
  {
    color: '#C51162',
    headline: 'Code',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <CodeIcon style={{ fontSize: iconSize }} />,
    mdDelay: '200',
    smDelay: '200',
  },
  {
    color: '#00B8D4',
    headline: 'Break Barriers',
    text:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.',
    icon: <CancelIcon style={{ fontSize: iconSize }} />,
    mdDelay: '400',
    smDelay: '0',
  },
]

function FeatureSection(props) {
  const { classes, width } = props

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="md-mg-bottom">
          What we do
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map((element) => (
              <Grid
                item
                xs={12}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp('md', width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
                className={classes.container}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  )
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired,
}

export default withWidth()(
  withStyles(styles, { withTheme: true })(FeatureSection)
)

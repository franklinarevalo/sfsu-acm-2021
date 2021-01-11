import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  Grid,
  Typography,
  Card,
  Button,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
} from '@material-ui/core'
import WaveBorder from '../../../shared/components/WaveBorder'

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down('lg')]: {
      width: 'auto',
    },
  },
  wrapper: {
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: '100%',
    verticalAlign: 'middle',
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(6),
    },
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up('md')]: {
      maxWidth: 'none !important',
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
  bannerBox: {
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
})

function HeadSection(props) {
  const { classes, theme, width } = props
  return (
    <Fragment>
      <div className={classNames('lg-p-top', classes.wrapper)}>
        <div className={classNames('container-fluid', classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, 'container')}>
                <Box
                  justifyContent="space-between"
                  className={classNames('row', classes.bannerBox)}
                >
                  <Grid item md={6}>
                    <img
                      src="https://raw.githubusercontent.com/franklinarevalo/sfsu-acm-2021/v2/src/logged_out/dummy_data/images/acm-logo.png"
                      className={classes.image}
                      alt="header logo"
                    />
                  </Grid>
                  <Box mx={7}>
                        <Typography
                          variant={isWidthUp('lg', width) ? 'h3' : 'h4'}
                          align='center'
                        >
                          Association for Computing Machinery at San Francisco State University
                        </Typography>
                      </Box>
                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </Fragment>
  )
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
}

export default withWidth()(withStyles(styles, { withTheme: true })(HeadSection))

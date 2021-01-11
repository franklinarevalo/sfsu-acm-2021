import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles,
} from '@material-ui/core'
import PriceCard from './PriceCard'
import calculateSpacing from './calculateSpacing'
import tshirt from "../../dummy_data/images/merch/acmTshirt.png"
import hoodie from "../../dummy_data/images/merch/acmHoodie.png"

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: 'hidden',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 360,
    },
  },
})

const pricePlans = [
  {
    title: 'ACM T-Shirt',
    price: '25.00',
    src: tshirt,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    title: 'ACM Hoodie',
    price: '35.00',
    src: hoodie,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    title: 'Custom',
    price: '35.00',
    src: tshirt,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
]

function PricingSection(props) {
  const { width, classes } = props
  return (
    <div className="lg-p-top" style={{ backgroundColor: '#FFFFFF' }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Merchandise 
      </Typography>
      <div className={classNames('container-fluid', classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          {pricePlans.map((plan) => (
            <Grid
              item
              xs={12}
              md={4}
              className={classes.cardWrapper}
              data-aos="zoom-in-up"
            >
              <PriceCard
                title={plan.title}
                src={plan.src}
                pricing={
                  <span>
                    {plan.price}
                    <Typography display="inline"> / month</Typography>
                  </span>
                }
                features={plan.features}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}

PricingSection.propTypes = {
  width: PropTypes.string.isRequired,
}

export default withStyles(styles, { withTheme: true })(
  withWidth()(PricingSection)
)

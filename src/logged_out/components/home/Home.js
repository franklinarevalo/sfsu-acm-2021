import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import HeadSection from './HeadSection'
import FeatureSection from './FeatureSection'
import PricingSection from '../pricing/PricingSection'
import About from '../about/About'
import Blog from '../blog/Blog'
import Pricing from '../pricing/Pricing'
import { Link } from 'react-router-dom'

import { Typography, withWidth, withStyles } from '@material-ui/core'

import * as Scroll from 'react-scroll'


const styles = (theme) => ({
  noDecoration: {
    textDecoration: 'none !important',
  },
  centerDiv: {
    justifyContent: 'center',
    display: 'flex',
  },
})

const Element = Scroll.Element

function Home(props) {
  const { blogPosts, selectBlog, classes } = props

  return (
    <Fragment>
      <Element name="home">
        <HeadSection />
      </Element>
      <Element name="events">
        <FeatureSection />
        <Typography variant="h3" align="center" className="md-mg-bottom">
          Events
        </Typography>
        <Blog blogPosts={blogPosts.slice(1, 4)} selectBlog={selectBlog} />
        <div className={classes.centerDiv}>
          <Link className={classes.noDecoration, "lg-mg-bottom"} to="/blog">
            <Typography
              variant="h4"
              display="inline"
              color="secondary"
              align="center"

            >
              View more
            </Typography>
          </Link>
        </div>

      </Element>
      <Element name="pricing">
        <Typography variant="h3" align="center" className="md-mg-bottom">
          Merchandise
        </Typography>
        <Link className={classes.noDecoration} to="/pricing">
          <PricingSection />
        </Link>
      </Element>
      <Element name="team">
        <About />
      </Element>
    </Fragment>
  )
}

export default withWidth()(withStyles(styles, { withTheme: true })(Home))

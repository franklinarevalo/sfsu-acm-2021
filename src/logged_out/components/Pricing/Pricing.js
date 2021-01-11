import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import HeadSection from './HeadSection'
import FeatureSection from './FeatureSection'
import PricingSection from '../Pricing/PricingSection'
import About from '../about/About'
import { Link } from 'react-router-dom'

import { Typography, withWidth, withStyles } from '@material-ui/core'

import * as Scroll from 'react-scroll'
import Blog from '../blog/Blog'

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
      <PricingSection />
      </Element>
     
      <Element name="team">
        <About />
      </Element>
    </Fragment>
  )
}

export default withWidth()(withStyles(styles, { withTheme: true })(Home))

import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'

import PricingSection from './PricingSection'
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

function Pricing(props) {
  const { blogPosts, selectBlog, classes } = props

  return (
    <Fragment>
      <Element name="merch">
      <PricingSection />
      </Element>
    </Fragment>
  )
}

export default withWidth()(withStyles(styles, { withTheme: true })(Pricing))

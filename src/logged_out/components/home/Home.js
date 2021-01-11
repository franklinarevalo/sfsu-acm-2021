import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import HeadSection from './HeadSection'
import FeatureSection from './FeatureSection'
import PricingSection from './PricingSection'
import About from '../about/About'
import { Link } from 'react-router-dom'

import {
  Typography,
} from '@material-ui/core'

import * as Scroll from 'react-scroll'
import Blog from '../blog/Blog'

const Element = Scroll.Element

function Home(props) {
  const { blogPosts, selectBlog, classes } = props

  return (
    <Fragment>
      <Element name="home">
        <HeadSection />
      </Element>
      <Element name="events">
        <Blog blogPosts={blogPosts.slice(1, 4)} selectBlog={selectBlog} />
        <Link  align="center" to="/blog">
          <Typography
            variant="h4"
            display="inline"
            color="secondary"
            align="center"
          >
            View more {'>>'}
          </Typography>
        </Link>
        <FeatureSection />
      </Element>
      <PricingSection />
      <Element name="team">
        <About />
      </Element>
    </Fragment>
  )
}

export default Home

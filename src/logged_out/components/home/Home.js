import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import HeadSection from './HeadSection'
import FeatureSection from './FeatureSection'
import PricingSection from './PricingSection'
import About from '../about/About'

import * as Scroll from 'react-scroll'
import Blog from '../blog/Blog'

const Element = Scroll.Element

function Home(props) {
  const { blogPosts, selectBlog } = props

  return (
    <Fragment>
      <Element name="home-section">
        <HeadSection />
      </Element>
      <Element name="events-section">
        <Blog blogPosts={blogPosts} selectBlog={selectBlog}/>
        <FeatureSection />
      </Element>
      <PricingSection />
      <Element name="team-section">
        <About />
      </Element>
    </Fragment>
  )
}

export default Home

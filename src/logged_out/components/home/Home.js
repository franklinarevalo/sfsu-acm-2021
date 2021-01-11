import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import HeadSection from './HeadSection'
import FeatureSection from './FeatureSection'
import PricingSection from './PricingSection'
import About from '../about/About'

import * as Scroll from 'react-scroll'

const Element = Scroll.Element

function Home() {
  return (
    <Fragment>
      <Element name="home-section">
        <HeadSection />
      </Element>
      <Element name="events-section">
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

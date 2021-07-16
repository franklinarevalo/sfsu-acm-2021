import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'

import PricingSection from './PricingSection'
import { Link } from 'react-router-dom'
import Carousel from 'react-material-ui-carousel'
import { Typography, withWidth, withStyles, Paper, Button, Container, CardMedia } from '@material-ui/core'
import orgpay from './Images/instructions/UCORP_pay.PNG'
import input from './Images/instructions/ORGPAY_input.PNG'
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
function Item(props) {
    return (
        <Paper>
            <h1>{props.item.name}</h1>
            <h2>{props.item.description}</h2>
            <CardMedia
                component="img"
                alt="Instructions"
                height="400"
                image={props.item.img}
               
            />
        </Paper>
    )
}

function Pricing(props) {

    var items = [
        {
            name: "UCORP Org Pay Instructions",
            img: orgpay,
            description: "Click on the blue 'Submit Student Org Payment' Button"
        },
        {
            name: "UCORP Org Pay Instructions",
            img: input,
            description: "!!! Fill in ALL the fields, the description field is the product type/color !!!"
        },
    ]
    return (
        <Fragment>
            <Element name="merch" className="lg-mg-bottom">
                <PricingSection />
            </Element>
            <Element align="center" className="md-mg-bottom">
                <Typography
                    variant="h4"
                    display="inline"
                    color="secondary"

                >
                    ACM Student Org Fund # : U1080
                </Typography>
            </Element>
            <Element align="center" className="lg-mg-bottom">

                <Typography
                    variant="h4"
                    display="inline"
                    color="secondary"
                >
                    <a target="_blank" href=" https://ucorp.sfsu.edu/orgpay">CLICK HERE TO ORDER</a>
                </Typography>

            </Element>
            <Element>
                <Container maxWidth="md">
                    <Carousel autoPlay={false} navButtonsAlwaysVisible={true} align="center">
                        {
                            items.map((item, i) => <Item key={i} item={item} />)
                        }
                    </Carousel>
                </Container>
            </Element>
        </Fragment>
    )
}

export default withWidth()(withStyles(styles, { withTheme: true })(Pricing))

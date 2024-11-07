import * as React from "react"
import {HeadFC, Link, PageProps} from "gatsby"
import {Heading, Container, Flex, Box} from "theme-ui"
import {animated, useSpring, config} from "react-spring"
import Header from "../@lekoarts/gatsby-theme-emilia/components/header"
import Layout from "../@lekoarts/gatsby-theme-emilia/components/layout"
import Seo from "../@lekoarts/gatsby-theme-emilia/components/seo"
import ContactForm from "../components/contact-form"
import Svg from "../@lekoarts/gatsby-theme-emilia/components/svg";


const Contact = (_props: PageProps) => (
    <Layout>
        <Header/>
        <Container p={4}>
            <Flex sx={{gap: 4, flexDirection: 'column'}}>
                <Box>
                    <Heading as="h1" variant="styles.h1" sx={{fontFamily: `'Merriweather'`}}>Contact</Heading>
                </Box>
                <Box>
                    <ContactForm/>
                </Box>
            </Flex>
        </Container>
    </Layout>
)

export default Contact

export const Head: HeadFC = () => <Seo title="Contact"/>

/** @jsx jsx */
import * as React from "react"
import {Flex, jsx, Container, Heading} from "theme-ui"
import {Themed} from "@theme-ui/mdx"
import {animated, useSpring, config} from "react-spring"
import {useStaticQuery, graphql, Link} from "gatsby"
import {GatsbyImage, IGatsbyImageData} from "gatsby-plugin-image"
import HeaderBackground from "./header-background"
import useEmiliaConfig from "../hooks/use-emilia-config"
import Svg from "./svg"

type HeaderProjectProps = {
    title: string
    areas: string[]
    description?: string
    date: string
}

type AvatarStaticQuery = {
    file: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData
        }
    }
}

const HeaderProject = ({title, areas, description = ``, date}: HeaderProjectProps) => {
    const {name} = useEmiliaConfig()
    const avatar = useStaticQuery<AvatarStaticQuery>(graphql`
    query {
      file(name: { eq: "avatar" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 40, height: 40, quality: 100)
        }
      }
    }
  `)

    const titleProps = useSpring({
        config: config.slow,
        from: {opacity: 0, transform: `translate3d(0, -30px, 0)`},
        to: {opacity: 1, transform: `translate3d(0, 0, 0)`},
    })
    const backButtonProps = useSpring({
        config: config.slow,
        from: {opacity: 0, transform: `translate3d(-30px, 0, 0)`},
        to: {opacity: 1, transform: `translate3d(0, 0, 0)`},
    })
    const infoProps = useSpring({config: config.slow, delay: 500, from: {opacity: 0}, to: {opacity: 1}})

    return (
        <Flex as="header" variant="layout.header">
            {/*<HeaderBackground />*/}
            <Container sx={{textAlign: `center`, my: 4, zIndex: 10}}>
                <animated.div style={backButtonProps}>
                    <Link
                        to="/"
                        aria-label={`${name} - Back to homepage`}
                        sx={{
                            display: `flex`,
                            alignItems: `center`,
                            color: `text`,
                            textDecoration: `none`,
                            svg: {
                                transition: `transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)`,
                            },
                            "&:hover, &:focus": {svg: {transform: `translateX(-6px)`}},
                        }}
                    >
                        <Svg id="leftArrow" width="20" height="18"/>
                        <div
                            sx={{
                                overflow: `hidden`,
                                borderRadius: `full`,
                                width: `5px`,
                                height: `5px`,
                                display: `inline-block`,
                                boxShadow: `md`,
                                mx: 2,
                            }}
                        >
                            {/*{avatar?.file?.childImageSharp?.gatsbyImageData && (*/}
                            {/*  <GatsbyImage image={avatar.file.childImageSharp.gatsbyImageData} alt="Avatar" />*/}
                            {/*)}*/}
                        </div>
                        <span sx={{fontWeight: `medium`}}>Back</span>
                    </Link>
                </animated.div>
                <div sx={{mt: 2, mb: 3}}>
                    <animated.div style={titleProps}>
                        <Heading as="h1" variant="styles.h1" sx={{fontFamily: `'Merriweather'`,}}>
                            {title}
                        </Heading>
                    </animated.div>
                    <animated.div style={infoProps}>
                        <Heading as="h2" variant="styles.h2" sx={{fontFamily: `'Karla'`,}}>
                            {areas.map((area, index) => (
                                    <React.Fragment key={area}>
                                        {index > 0 && `, `}
                                        {area}
                                    </React.Fragment>
                                ))}
                        </Heading>
                        <Heading as="h3" variant="styles.h3" sx={{fontFamily: `'Karla'`,}}>
                            Released on {date}
                        </Heading>
                    </animated.div>
                </div>
            </Container>
        </Flex>
)
}

export default HeaderProject

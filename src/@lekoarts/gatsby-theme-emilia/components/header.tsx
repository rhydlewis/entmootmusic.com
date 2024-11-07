/** @jsx jsx */
import {jsx, Heading, Flex, Image, Link} from "theme-ui"
import {animated, useSpring, config} from "react-spring"
import {useStaticQuery, graphql} from "gatsby"
import {GatsbyImage, IGatsbyImageData} from "gatsby-plugin-image"
import useEmiliaConfig from "../hooks/use-emilia-config"
import SocialMediaList from "./social-media-list"

type AvatarStaticQuery = {
    file: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData
        }
    }
}

const Header = () => {
    const {name, location, assetsPath} = useEmiliaConfig()
    const avatar = useStaticQuery<AvatarStaticQuery>(graphql`
    query {
      file(name: { eq: "avatar" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 140, height: 140, quality: 100)
        }
      }
    }
  `)

    const fadeUpProps = useSpring({
        config: config.slow,
        from: {opacity: 0, transform: `translate3d(0, 30px, 0)`},
        to: {opacity: 1, transform: `translate3d(0, 0, 0)`},
    })
    const fadeUpPropsDelay = useSpring({
        config: config.slow,
        delay: 250,
        from: {opacity: 0, transform: `translate3d(0, 30px, 0)`},
        to: {opacity: 1, transform: `translate3d(0, 0, 0)`},
    })
    const fadeProps = useSpring({config: config.slow, from: {opacity: 0}, to: {opacity: 1}})
    const fadeLongProps = useSpring({config: config.slow, delay: 600, from: {opacity: 0}, to: {opacity: 1}})

    return (
        <Flex as="header" variant="layout.projectHead">
            {/*<HeaderBackground />*/}
            <div sx={{textAlign: `center`, mt: 2, mb: 5, zIndex: 10}}>
                <animated.div style={fadeUpProps}>
                    <Heading as="h1" variant="styles.h1">
                        <Link
                            aria-label={`Back to homepage`}
                            sx={(t) => ({
                                ...t.styles?.a,
                                color: `text`,
                                ":hover": {color: `primary`, textDecoration: `none`}
                            })}
                            href="/"
                        >
                            <Image
                                src="/entmoot-logo.png"
                                alt="entMOOT logo"
                                sx={{
                                    maxWidth: '400px',
                                    margin: '0 auto',
                                    display: 'block'
                                }}
                            />
                        </Link>
                    </Heading>
                </animated.div>
                <animated.div style={fadeUpPropsDelay} sx={{mt: 1, mb: 1, a: {mx: 2}}}>
                    <Flex
                        sx={{
                            justifyContent: `center`,
                            alignItems: `center`,
                            color: `text`,
                            fontFamily: `'Karla'`,
                            fontSize: 24,
                        }}
                    >
                        {location}
                    </Flex>
                </animated.div>
                <div data-testid="social-header" sx={{mt: 3, mb: 5, a: {mx: 2}}}>
                    <animated.div style={fadeLongProps}>
                        <SocialMediaList/>
                    </animated.div>
                </div>
            </div>
        </Flex>
    )
}

export default Header

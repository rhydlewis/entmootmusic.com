/** @jsx jsx */
import {Box, jsx, Container, Flex, Link, useColorMode} from "theme-ui"
import useEmiliaConfig from "../hooks/use-emilia-config"
import SocialMediaList from "./social-media-list"
import ColorModeToggle from "./colormode-toggle"
import AboutMeMDX from "../texts/about-me.mdx"

const Footer = () => {
    const {showThemeAuthor} = useEmiliaConfig()
    const [colorMode] = useColorMode<"light" | "dark">()
    const isDark = colorMode === `dark`

    return (
        <Box
            as="footer"
            variant="layout.footer"
            sx={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, ${isDark ? `0.35` : `0.15`}) 100%)`,
            }}
        >
            <Container>
                <div sx={{display: `grid`, gridGap: 4, gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `2fr 1fr`]}}>
                    <div
                        sx={{
                            p: {mb: 0},
                            h2: {
                                mt: 0,
                                mb: 1,
                            },
                        }}
                    >
                        <AboutMeMDX/>
                    </div>
                    <Flex
                        sx={{
                            textAlign: [`center`, `center`, `center`, `right`],
                            flexDirection: `column`,
                            justifyContent: `space-between`,
                        }}
                    >
                        <ColorModeToggle/>
                        <div sx={{mt: [4, 4, 4, 0]}}>
                            <div sx={{a: {ml: [1, 1, 1, 2], mr: [1, 1, 1, 0]}}}>
                                <SocialMediaList/>
                            </div>
                            <div sx={{
                                color: `textMuted`,
                                fontFamily: `'Karla'`
                            }}>Copyright &copy; {new Date().getFullYear()} Rhyd
                                Lewis. All rights reserved.
                            </div>
                            <div sx={{color: `textMuted`, fontFamily: `'Karla'`, fontSize: '0.8rem'}}>Theme by
                                <Link href="https://www.lekoarts.de/?utm_source=emilia&utm_medium=Theme" target="_blank"
                                      rel="noopener noreferrer"> LekoArts</Link>
                            </div>
                        </div>
                    </Flex>
                </div>
            </Container>
        </Box>
    )
}

export default Footer

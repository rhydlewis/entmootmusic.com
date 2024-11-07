import type {GatsbyConfig, PluginRef} from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
    siteMetadata: {
        // You can overwrite values here that are used for the SEO component
        // You can also add new values here to query them like usual
        // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emilia-core/gatsby-config.mjs
        siteTitle: `entMOOT`,
        siteTitleAlt: `entMOOT`,
        siteHeadline: `New Musical Works for Film and TV`,
        siteUrl: `https://entmootmusic.com`,
        siteDescription: `New Musical Works for Film and TV`,
        siteImage: `/og-image.jpg`,
        siteLanguage: `en`,
        author: `Rhyd Lewis`,
    },
    trailingSlash: `always`,
    plugins: [
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Karla`,
                        file: `https://fonts.googleapis.com/css2?family=Karla:wght@400;600;700&display=swap`,
                    },
                    {
                        name: `Merriweather`,
                        file: `https://fonts.googleapis.com/css2?family=Merriweather:wght@400;600;700&display=swap`,
                    },
                ],
            },
        },
        {
            resolve: `@lekoarts/gatsby-theme-emilia`,
            // See the theme's README for all available options
            options: {
                name: "entMOOT",
                location: "New Musical Works for Film and TV",
                socialMedia: [
                    {title: `Spotify`, href: `https://twitter.com/lekoarts_de`},
                    {title: `Apple Music`, href: `https://twitter.com/lekoarts_de`},
                    {title: `Instagram`, href: `https://twitter.com/lekoarts_de`},
                    {title: `YouTube`, href: `https://www.lekoarts.de`}]
            },
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                output: `/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Emilia - @lekoarts/gatsby-theme-emilia`,
                short_name: `Emilia`,
                description: `Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Themeable with Theme UI.`,
                start_url: `/`,
                background_color: `#fff`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#3182ce`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        // You can remove this plugin if you don't need it
        shouldAnalyseBundle && {
            resolve: `gatsby-plugin-webpack-statoscope`,
            options: {
                saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
                saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
                open: false,
            },
        },
    ].filter(Boolean) as Array<PluginRef>,
}

export default config

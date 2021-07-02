
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import Layout from 'Layout'
import BullWeb3Provider from 'utils/hocs/BullWeb3Provider'
import { PopupProvider } from 'contexts/popup-context'
import * as COMMON_CONSTANTS from 'utils/constants/common'
import { BANNER_IMAGE_PATH } from 'utils/constants/image-paths'
import theme from 'styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{COMMON_CONSTANTS.TITLE}</title>
        <meta charSet='utf-8' />
        <meta name='keywords' content='Keywords' />
        <meta name='description' content='Description' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='theme-color' content='#FFFFFF' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={COMMON_CONSTANTS.SITE_URL} />
        <meta property='og:title' content={COMMON_CONSTANTS.TITLE} />
        <meta property='og:description' content={COMMON_CONSTANTS.DESCRIPTION} />
        <meta property='og:image' content={BANNER_IMAGE_PATH} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='628' />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={COMMON_CONSTANTS.SITE_URL} />
        <meta property='twitter:title' content={COMMON_CONSTANTS.TITLE} />
        <meta property='twitter:description' content={COMMON_CONSTANTS.DESCRIPTION} />
        <meta property='twitter:image' content={BANNER_IMAGE_PATH} />

        <meta name='msapplication-config' content='/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='msapplication-TileImage' content='/mstile-144x144.png' />
      </Head>
      <BullWeb3Provider>
        <ThemeProvider theme={theme}>
          <PopupProvider>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PopupProvider>
        </ThemeProvider>
      </BullWeb3Provider>
    </>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps };
};

export default MyApp

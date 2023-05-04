import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>FOVIES | All Bollywood, Hollywood, South Movies & Web Series</title>
          <meta name="description" content="❓ Do you want to download movies 🎥 & web series on the RELEASED DATE 📅. Then checkout our site to download them for FREE!" />
          <meta name="google-site-verification" content="MJIYCW5MoI6p1_TjqwcsO-VRxdgQoS1iqrZNEFDdL3c" />
          <link rel="icon" href="/icons8-f-67.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          {siteConfig.googleFontLinks.map(link => (
            <link key={link} rel="stylesheet" href={link} />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

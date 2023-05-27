import Document, { Head, Html, Main, NextScript } from 'next/document'
import siteConfig from '../../config/site.config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="❓ Do you want to download movies 🎥 & web series on the RELEASED DATE 📅. Then checkout our site to download them for FREE!" />
          <meta name="google-site-verification" content="MJIYCW5MoI6p1_TjqwcsO-VRxdgQoS1iqrZNEFDdL3c" />
          <meta name="google-site-verification" content="c-Occd7at4JCCLNSWxJmGMoIUAKibmK9alfUd8GUu4s" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3672423733931753" crossOrigin="anonymous"></script>
          <link rel="icon" href="/icons8-f-67.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          {siteConfig.googleFontLinks.map(link => (
            <link key={link} rel="stylesheet" href={link} />
          ))}
          <script async type='text/javascript' src='//pl19527269.highrevenuegate.com/60/af/df/60afdf7bec13c212b93aba58c1511f46.js'></script>
          <script async type='text/javascript' src='//pl19527139.highrevenuegate.com/39/53/10/395310875866cf0696b66b472fe656c4.js'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{ __html: `
            (function() {
              var script = document.createElement('script');
              script.src = '//pl19527139.highrevenuegate.com/39/53/10/395310875866cf0696b66b472fe656c4.js';
              script.async = true;
              document.head.appendChild(script);
            })();`
          }} />
        </body>
      </Html>
    )
  }
}

export default MyDocument

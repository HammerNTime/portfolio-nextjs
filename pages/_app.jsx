import Layout from '../components/layout'
import '../styles/globals.css'
import Head from "next/head"

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="main-container">
        <Head>
          <title>Hammer Portfolio</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </div>
  )
}

export default MyApp

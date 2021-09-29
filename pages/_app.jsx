import Layout from '../components/layout'
import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <div className="main-container">
        <Head>
          <title>Hammer Portfolio</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </div>
  )
}

export default MyApp

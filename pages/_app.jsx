import Layout from "../components/layout"
import "../styles/globals.css"
import Head from "next/head"
import HammerCursor from "../components/customCursor"

const MyApp = ({ Component, pageProps }) => {
	return (
		<div className="main-container">
			<HammerCursor />
			<Head>
				<title>Hammer Portfolio</title>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
				<link href="https://fonts.googleapis.com/css2?family=Akronim&family=Bangers&family=Carter+One&family=Fruktur&family=Geostar+Fill&family=Press+Start+2P&display=swap" rel="stylesheet"/>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	)
}

export default MyApp

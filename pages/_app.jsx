import Layout from "../components/Layout"
import "../styles/globals.css"
import Head from "next/head"
import Script from 'next/script'
import { styled, ThemeProvider, createTheme } from "@mui/material/styles"
import HammerCursor from "../components/customCursor"

const theme = createTheme({
  components: {
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontSize: '20px',
					fontWeight: "600"
        },
      },
    },
		MuiCardActions: {
			styleOverrides: {
				root: {
					backgroundColor:"rgba(230, 230, 230, .3)"
				},
			}
		},
  },
});

const MyApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
		<div className="main-container">
			<Script type="text/javascript" src="https://xl1.pop6serve.com/popsixle.php?t=5fd8d26899c79a2e031ac156a64424166b771901c42eb88c02ca4983d7e09e03"/>
			<Script
				id="gtm_script"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{ 
					__html: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WFQB7WV'); 
					`,
				}}
			/>
			<HammerCursor />
			<Head>
				<title>Hammer Time</title>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Akronim&family=Bangers&family=Carter+One&family=Fruktur&family=Geostar+Fill&family=Press+Start+2P&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Layout>
			<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WFQB7WV"height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
				<Component {...pageProps} />
			</Layout>
		</div>
		</ThemeProvider>
	)
}

export default MyApp

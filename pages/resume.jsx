import React from "react"
import styles from "../styles/Resume.module.css"

function Resume() {
	return (
		<div className={styles.container}>
			<iframe
				className={styles.resumeFrame}
				title="PDF"
				src={`/pdfjs-2.9.359-dist/web/viewer.html?file=${"/Resume-for-portfolio.pdf"}`}
				width="100%"
				height="700px"
			></iframe>
			{/* <div className={styles.box}></div> */}
		</div>
	)
}

export default Resume

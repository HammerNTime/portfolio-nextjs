import styles from "../styles/CustomCursor.module.css"
import useMousePosition from "../components/useMousePosition"
import { useEffect, useState } from "react"

const DotRing = () => {
	// 1.
	const [test, setTest] = useState()
	useEffect(() => {
		window.addEventListener("mousedown", () => {
			setTest(styles.mouseDown)
			console.log("working")
		})
		window.addEventListener("mouseup", () => {
			setTest()
			console.log("working")
		})
	}, [])
	// let mouse = ""
	const { x, y } = useMousePosition()
	return (
		<>
			{/* 2. */}

			{/* 3. */}
			<img
				src="/hammer.ico"
				className={styles.dot + " " + test}
				style={{ left: `${x}px`, top: `${y}px` }}
			/>
		</>
	)
}

export default DotRing

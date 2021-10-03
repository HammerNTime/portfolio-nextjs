import styles from "../styles/CustomCursor.module.css"
import useMousePosition from "../components/useMousePosition"
import { useEffect, useState } from "react"

const HammerCursor = () => {
	const [test, setTest] = useState()
	useEffect(() => {
		window.addEventListener("mousedown", () => {
			setTest(styles.mouseDown)
		})
		window.addEventListener("mouseup", () => {
			setTest()
		})
	}, [])
	const { x, y } = useMousePosition()
	return (
		<>
			<img
				src="/hammerlast.png"
				className={styles.dot + " " + test}
				style={{ left: `${x}px`, top: `${y}px` }}
				auto="true"
			/>
		</>
	)
}

export default HammerCursor

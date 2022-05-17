import styles from "../styles/Dylan.module.css"
import { useEffect, useState } from "react"

const Dylan = () => {
	const [show1, setShow1] = useState()
	const [show2, setShow2] = useState()
	const [show3, setShow3] = useState()
	const [show4, setShow4] = useState()
	const [show5, setShow5] = useState()
	const [show6, setShow6] = useState()
	const [fireBack, setFireBack] = useState()
	useEffect(() => {
		setTimeout(() => {
			setShow3(styles.show3)
		}, 2000)
		setTimeout(() => {
			setShow1(styles.show1)
		}, 3000)
		setTimeout(() => {
			setShow2(styles.show2)
		}, 4000)
		setTimeout(() => {
			setShow4(styles.show4)
		}, 5000)
		setTimeout(() => {
			setShow5(styles.show5)
		}, 6000)
		setTimeout(() => {
			setShow6(styles.show6)
			setFireBack(styles.fireBack)
		}, 7000)

	}, [])
	return (
		<div className={styles.mainContainer}>
			<div></div>
			<div>
				<img
					src="/headShotVector.png"
					alt=""
					className={styles.headShot + " " + fireBack}
				/>
			</div>
			<div className={styles.dylan1 + " " + show1}>Dylan</div>
			<div className={styles.dylan2 + " " + show2}>Dylan</div>
			<div className={styles.dylan3 + " " + show3}>Dylan</div>
			<div className={styles.dylan4 + " " + show4}>Dylan</div>
			<div className={styles.dylan5 + " " + show5}>Dylan</div>
			<div className={styles.fire + " " + show6}>I Code Hot Fire</div>
		</div>
	)
}

export default Dylan

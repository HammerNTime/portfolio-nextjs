import * as React from "react"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import styles from "../styles/Bloom.module.css"
import GitHubIcon from "@mui/icons-material/GitHub"
import PublicIcon from "@mui/icons-material/Public"

const ExpandMore = styled((props) => {
	const { expand, ...other } = props
	return <IconButton {...other} />
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}))

const Yahtzee = () => {
	const [expanded, setExpanded] = React.useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: "white" }} aria-label="Yahtzee Icon">
						<img src="/DiceFav.png" alt="Capitol Gains Icon" width="28px" />
					</Avatar>
				}
				title="Yahtzee"
				subheader="Your Roll"
			/>
			<CardMedia
				component="img"
				height="150"
				image="/Yahtzee.png"
				alt="Ugame Banner"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary" height="70px">
					Yahtzee is an online 2-player classic Hasboro Yahtzee built from
					JavaScript, HTML, and CSS. A simple construction, but all the game
					logic is from scratch. Mobile and Desktop friendly!{" "}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					sx={{ cursor: "none" }}
					aria-label="Yahtzee website"
					href="https://hammer-yahtzee.netlify.app/"
          className={styles.siteLink}
				>
					<PublicIcon />
				</IconButton>
				<IconButton
					sx={{ cursor: "none" }}
					aria-label="Repo"
					href="https://github.com/HammerNTime/u-game"
          className={styles.gitHubLink}
				>
					<GitHubIcon />
				</IconButton>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
					sx={{ cursor: "none" }}
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>

			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<img
						width="100%"
						src="/yahtzee-start.png"
						alt="Yahtzee starter page"
					/>
					<Typography paragraph>
						<br />
						Yahztee was my first project for my General Assembly Software
						Engineering Immersive. It demonstrates my ability to take a limited
						amount of experience and knowledge and turn it into an engaging
						application with sound engineering.
					</Typography>
					<img
						width="100%"
						src="/smart-highlighting-yellow.png"
						alt="Showing the apps smart highlighting feature"
					/>
				</CardContent>
			</Collapse>
		</Card>
	)
}

export default Yahtzee

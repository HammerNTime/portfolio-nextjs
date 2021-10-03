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

const CapitolGains = () => {
	const [expanded, setExpanded] = React.useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				sx={{fontSize:"20px", fontWeight:"600"}}
				avatar={
					<Avatar sx={{ bgcolor: "#CCFFFF" }} aria-label="Capitol Gains Icon">
						<img
							src="/capitolGains-icon.png"
							alt="Capitol Gains Icon"
							width="28px"
						/>
					</Avatar>
				}
				title="Capitol Gains"
				subheader="Stalk Rep's Stocks"
			/>
			<CardMedia
				component="img"
				height="100"
				image="/capitolGainsLogo.png"
				alt="Capitol Gains Banner"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary" height="120px">
					Capitol Gains allows you to see the publicly released disclosures that
					have been filed by memebers of the United States Congress. The app is
					broken up by Senate and House of Representatives.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					sx={{ cursor: "none" }}
					aria-label="Capitol Gains website"
					href="https://capitol-gains.herokuapp.com/"
					className={styles.siteLink}
				>
					<PublicIcon sx={{color: "blue"}}/>
				</IconButton>
				<IconButton
					sx={{ cursor: "none" }}
					aria-label="Repo"
					href="https://github.com/HammerNTime/capitol-gains"
					className={styles.gitHubLink}
				>
					<GitHubIcon sx={{color: "black"}}/>
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
					<Typography paragraph>
						Capitol Gains was the third project for my General Assembly Software
						Engineering Immersive and first ever group project. This App
						utalizes React, JavaScript, Mongoose, Express, and JWT Token
						Authentication. While I touched most aspects of the code, my primary
						focus was on API implementation, manipulation, and data
						visualization.
					</Typography>
					<img
						width="100%"
						src="/graph.png"
						alt="Capitol Gains API visualization through line graph"
					/>

					<Typography paragraph>
						<br />
						Shout-out to&nbsp;
						<a className={styles.names} href="https://github.com/zmar0519">
							Zachary Martin
						</a>
						, and{" "}
						<a className={styles.names} href="https://github.com/SummerXiX">
							Summer Xing
						</a>
						&nbsp;for their dedication and hard work on this project!
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	)
}

export default CapitolGains

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

const Bloom = () => {
	const [expanded, setExpanded] = React.useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: "black" }} aria-label="Bloom icon">
						<img src="/bloom-icon.png" alt="Bloom Icon" />
					</Avatar>
				}
				title="Bloom"
				subheader="Grow your opportunities"
				// sx={{background:"blue"}}
			/>
			<CardMedia
				component="img"
				height="100"
				image="/logo-banner-dark.png"
				alt="Bloom Banner"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					At Bloom, we believe every job seeker deserves an opportunity to find
					meaningful work. That starts with helping you turn complexity into
					simplicity. When you simplify your search, you can grasp your options,
					prioritize what you want, and take action to land your next role.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					aria-label="Bloom website"
					href="https://www.go-bloom.com/"
					sx={{ cursor: "none" }}
				>
					<PublicIcon />
				</IconButton>
				<IconButton
					sx={{ cursor: "none" }}
					aria-label="Repo"
					href="https://github.com/HammerNTime/bloom-frontend"
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
					<Typography paragraph height="120px">
						Bloom is a job opportunity tracking app built with a mobile-first
						design. Four of us built this in a seven day sprint as a final
						project for our General Assembly Software Engineering Immersive.
					</Typography>
					<iframe
						className={styles.embededVideo}
						src="https://www.youtube.com/embed/w4OMpRpCu7M"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
					></iframe>
					<Typography paragraph>
						<br />
						Bloom uses Django, Python, and SQL (PostgreSQL) in the backend and
						Reactjs up front. There is still a lot of functionality and features
						in the &apos;ice-box&apos;, but we are incredibly proud of what was
						accomplished in a week of teamwork.
					</Typography>
					<Typography paragraph>
						Be sure to check out the amazing&nbsp;
						<a className={styles.names} href="https://jon.codes/">
							Jonathan Herman
						</a>
						,{" "}
						<a className={styles.names} href="https://github.com/teradaian">
							Ian Teradaian
						</a>
						, and{" "}
						<a className={styles.names} href="https://github.com/shu-hu">
							Shunuan Hu
						</a>
						&nbsp;all of whom I was blessed to work with on this!
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	)
}

export default Bloom

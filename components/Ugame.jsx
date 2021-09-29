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
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

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

const Ugame = () => {
	const [expanded, setExpanded] = React.useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: "rgb(0,212,255)"}} aria-label="Capitol Gains Icon">
						<img src="/game-controller.png" alt="Capitol Gains Icon" width="28px" />
					</Avatar>
				}
				title="Ugame"
				subheader="Own it"
			/>
			<CardMedia
				component="img"
				height="130"
				image="/ugameLogo.png"
				alt="Ugame Banner"
			/>
			<CardContent >
				<Typography variant="body2" color="text.secondary" height="90px" >
          U-Game is a site that you can browse video games from! 
          Inside the site you can create a profile, browse or add games, make reviews, and create an &apos;owned list&apos; of games.				
          </Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="Ugame website" href="https://u-game-unit-2-project.herokuapp.com/">
					<PublicIcon />
				</IconButton>
				<IconButton aria-label="Repo" href="https://github.com/HammerNTime/u-game">
					<GitHubIcon />
				</IconButton>
				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</ExpandMore>
			</CardActions>

			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
          <img width="100%" src="/UgameProfile.png" alt="Index page of Games currently on Ugame" />
					<Typography paragraph>
            <br/>
            U-Game is built with JavaScript, EJS, Mongoose, and Express and includes Google OAuth implementation. 
            This my second unit project in my General Assembly Software Engineering Immersive and showcases a simple, yet effective design and full CRUD functionality.
            Mobile responsiveness is the main feature still on the backburner.
          </Typography>
					<img width="100%" src="/ugameIndex.png" alt="Index page of Games currently on Ugame" />

				</CardContent>
			</Collapse>
		</Card>
	)
}

export default Ugame

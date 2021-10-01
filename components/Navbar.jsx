import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import AppBar from "@mui/material/AppBar"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import InboxIcon from "@mui/icons-material/MoveToInbox"
import MenuIcon from "@mui/icons-material/Menu"
import styles from "../styles/Navbar.module.css"
import { useRouter } from "next/router"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const Navbar = () => {
	const router = useRouter()

	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	})

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return
		}

		setState({ ...state, [anchor]: open })
	}
	const list = (anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem button key="Home" onClick={() => router.push("/")}>
					<ListItemIcon>
						<InboxIcon />
					</ListItemIcon>
					<ListItemText primary="Home" />
				</ListItem>
				<ListItem button key="Resume" onClick={() => router.push("/resume")}>
					<ListItemIcon>
						<InboxIcon />
					</ListItemIcon>
					<ListItemText primary="Resume" />
				</ListItem>
			</List>
			<Divider />
			<List>
				<ListItem
					button
					key="GitHub"
					onClick={() => router.push("https://github.com/HammerNTime")}
				>
					<ListItemIcon>
						<GitHubIcon sx={{ color: "black" }} />
					</ListItemIcon>
					<ListItemText primary="GitHub" />
				</ListItem>
				<ListItem
					button
					key="Linkedin"
					onClick={() =>
						router.push("https://www.linkedin.com/in/dylanshammer/")
					}
				>
					<ListItemIcon>
						<LinkedInIcon sx={{ color: "#0077b5" }} />
					</ListItemIcon>
					<ListItemText primary="Linkedin" />
				</ListItem>
			</List>
		</Box>
	)

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="sticky">
				<Toolbar>
					<Link href="/" className={styles.icon}>
						<img src="/hammer.png" alt="hammer icon" className={styles.icon} />
					</Link>
					<Typography
						textAlign="center"
						marginLeft="-15px"
						variant="h5"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						Dylan Hammer
					</Typography>
					<React.Fragment key={"right"}>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 0 }}
							onClick={toggleDrawer("right", true)}
						>
							<MenuIcon />
						</IconButton>
						<SwipeableDrawer
							anchor={"right"}
							open={state["right"]}
							onClose={toggleDrawer("right", false)}
							onOpen={toggleDrawer("right", true)}
						>
							{list("right")}
						</SwipeableDrawer>
					</React.Fragment>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Navbar

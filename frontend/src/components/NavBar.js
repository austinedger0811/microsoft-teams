import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import './NavBar.css'

const NavBar = () => {
	return (
		<div className="NavBar">
			<AppBar>
				<Toolbar>
					<NavigateBeforeIcon fontSize="large" onClick={() => console.log('Arrow Left Clicked.')}/>
					<NavigateNextIcon fontSize="large" onClick={() => console.log('Arrow Right Clicked.')}/>
					<Avatar alt="name" />
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default NavBar

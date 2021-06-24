import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import Avatar from '@material-ui/core/Avatar'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

const ChatArea = () => {
	return (
		<Container>
			<NavBar>
				<SearchBar type="search" placeholder="Search" />
				<NavButtonContainer>
					<SettingsButton />
					<AvatarIcon />
				</NavButtonContainer>
			</NavBar>
			<Header>
				<AvatarIcon />
				<Typography variant="h6">Edger, Austin</Typography>
			</Header>
			<ChatContainer>
				
			</ChatContainer>
		</Container>
	)
}

export default ChatArea

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const NavBar = styled.div`
	display: flex;
	flex-shrink: 0;
	height: 50px;
	background-color: #464775;
	justify-content: space-between;
	align-items: center;
	padding-right: 8px;
`;

const NavButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 70px;

`;

const SettingsButton = styled(MoreHorizIcon)`
	&& {
		color: white;
		cursor: pointer;
		opacity: 0.8;
	}
`;

const AvatarIcon = styled(Avatar)`
&& {
		cursor: pointer;
		height: 32px;
		width: 32px;
	}
`;

const Header = styled.div`
	display: flex;
	flex-shrink: 0;
	align-items: center;
	height: 60px;
	padding: 20px;
	background-color: #F5F5F5;
	border-bottom: solid 1px #E0E0E0;
`;

const ChatContainer = styled.div`
	background-color: #F5F5F5;
	height: 100%;
`;

const SearchBar = styled.input`
	height: 32px;
	width: 70%;
	padding: 8px;
	border-radius: 2px;
	border: none;
	opacity: 0.8;
`;
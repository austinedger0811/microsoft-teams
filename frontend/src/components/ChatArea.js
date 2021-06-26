import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import Avatar from '@material-ui/core/Avatar'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import AddIcon from '@material-ui/icons/Add'

const ChatArea = () => {
	return (
		<Container>
			<NavBar>
				<SearchBar type="search" placeholder="Search" />
				<NavButtonContainer>
					<SettingsButton />
					<AvatarNavIcon />
				</NavButtonContainer>
			</NavBar>
			<Header>
				<UserDescriptionContainer>
					<AvatarUserIcon />
					<Typography variant="h6">Edger, Austin</Typography>
				</UserDescriptionContainer>
				<ChatOptionsContainer>
					<Typography variant="subtitle-1">Chat</Typography>
					<Typography variant="subtitle-1">Files</Typography>
					<Typography variant="subtitle-1">Organization</Typography>
					<Typography variant="subtitle-1">Activity</Typography>
					<AddButton />
				</ChatOptionsContainer>
			</Header>
			<ChatContainer>
				<form>
					<ChatTextInput />
				</form>
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

const AvatarNavIcon = styled(Avatar)`
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

const UserDescriptionContainer = styled.div`
	display: flex;
	align-items: center;
`;

const AvatarUserIcon = styled(Avatar)`
&& {
		cursor: pointer;
		height: 32px;
		width: 32px;
		margin-right: 12px;
	}
`;

const AddButton = styled(AddIcon)`
&& {
		cursor: pointer;

	}
`;

const ChatOptionsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	width: 300px;
`;

const ChatContainer = styled.div`
	background-color: #F5F5F5;
	height: 100%;
`;

const ChatTextInput = styled.input`
	position: absolute;
	bottom: 0;
	margin-bottom: 40px;

`;

const SearchBar = styled.input`
	height: 32px;
	width: 70%;
	padding: 8px;
	border-radius: 2px;
	border: none;
	opacity: 0.8;
`;
import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import CreateIcon from '@material-ui/icons/Create'
import FilterListIcon from '@material-ui/icons/FilterList'
import NotificationsIcon from '@material-ui/icons/Notifications'

const LeftPanel = () => {
	return (
		<Container>
			<NavBar>
				<BackButton />
				<NextButton />
			</NavBar>
			<ActionsContainer>
				<ActionsMenu>
					

				</ActionsMenu>
				<ActionsArea>
					<Header>
						<Typography variant="h6">Chat</Typography>
						<HeaderButtonContainer>
							<FilterListIcon fontSize="small" />
							<CreateIcon fontSize="small" />
						</HeaderButtonContainer>
					</Header>
				</ActionsArea>
			</ActionsContainer>
		</Container>
	)
}

export default LeftPanel

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 400px;
`;

const NavBar = styled.div`
	display: flex;
	flex-shrink: 0;
	height: 50px;
	padding: 8px;
	background-color: #464775;
	align-items: center;
`;

const ActionsContainer = styled.div`
	display: flex;
	height: 100%;
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	flex-shrink: 0;
	height: 60px;
	background-color: #F0F0F0;
	border-bottom: solid 1px #E0E0E0;
`;

const HeaderButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 50px;
`;

const ActionsMenu = styled.div`
	width: 80px;
	background-color: #EBEBEB;
`;

const ActionsArea = styled.div`
	width: 100%;
	background-color: #F0F0F0;
`;

const BackButton = styled(NavigateBeforeIcon)`
	&& {
		color: white;
		cursor: pointer;
		opacity: 0.8;
	}
`;

const NextButton = styled(NavigateNextIcon)`
	&& {
		color: white;
		cursor: pointer;
		opacity: 0.8;
	}
`;

import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'

const ChatArea = () => {
	return (
		<Container>
			<NavBar>
				<SearchBarContainer>
					<SearchIcon/>
					<SearchBar type="search" />
				</SearchBarContainer>

			</NavBar>
			<Header>

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
	//justify-content: space-between;
	align-items: center;
`;

const SearchBarContainer = styled.div`

`;

const Header = styled.div`
	flex-shrink: 0;
	height: 60px;
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
	border-radius: 2px;
	border: none;
	opacity: 0.8;
	


`;
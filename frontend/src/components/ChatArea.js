import React from 'react'
import styled from 'styled-components'

const ChatArea = () => {
	return (
		<Container>
			<NavBar>
				<h2>Nav</h2>
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
	height: 100%;
	width: 100%;
	background-color: whitesmoke;
`;

const NavBar = styled.div`
	display: flex;
	height: 50px;
	padding: 15px;
	background-color: lightblue;
	justify-content: space-between;
	align-items: center;
`;

const Header = styled.div`
	height: 60px;
	background-color: blue;
`;

const ChatContainer = styled.div``;
import React from 'react'
import styled from 'styled-components'

const LeftPanel = () => {
    return (
        <Container>
            <NavBar>
                <h2>Nav</h2>
            </NavBar>
            <Header>

            </Header>
            <ActionsContainer>
                <ActionsMenu>
                    <h2>Menu</h2>
                </ActionsMenu>
                <ActionsArea>
                    <h2>Area</h2>
                </ActionsArea>
            </ActionsContainer>
        </Container>
    )
}

export default LeftPanel

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 400px;
`;

const NavBar = styled.div`
    display: flex;
    height: 50px;
    padding: 15px;
    background-color: lightblue;
    justify-content: space-between;
    align-items: center;
`;

const ActionsContainer = styled.div`
    display: flex;
    height: 100%;
`;

const Header = styled.header`
    height: 60px;
    padding: 30px;
    background-color: lightcoral;
`;

const ActionsMenu = styled.div`
    width: 80px;
    background-color: green;
`;

const ActionsArea = styled.div`
    width: 100%;
    background-color: red;
`;

import React from 'react'
import styled from 'styled-components'

const LeftPanel = () => {
    return (
        <Container>
            <Header>
                <h2>Nav</h2>
            </Header>
            <ActionsContainer>
                <ActionsMenu>
                    menu
                </ActionsMenu>
                <ActionsArea>
                    area
                </ActionsArea>
            </ActionsContainer>
        </Container>
    )
}

export default LeftPanel

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 400px;
`;

const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: lightblue;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    align-items: center;
    padding: 10px;
    height: 40px;
`;

const ActionsContainer = styled.div`
    display: flex;
    height: 100%;
`;

const ActionsMenu = styled.div`
    width: 60px;
    background-color: green;
`;

const ActionsArea = styled.div`
    width: 100%;
    background-color: red;
`;

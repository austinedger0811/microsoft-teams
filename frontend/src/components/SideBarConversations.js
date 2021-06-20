import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const SideBarConversations = () => {
    return (
        <Container>
            <Typography variant="h6">Chat</Typography>

        </Container>
    )
}

const Container = styled.div`
    margin-top: 80px;
    margin-left: 24px;
    width: 100%;
    height: 100vh;
    background-color: white;
`;

export default SideBarConversations

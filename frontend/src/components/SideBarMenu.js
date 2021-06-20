import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ChatIcon from '@material-ui/icons/Chat'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'

import './SideBarMenu.css'

const SideBarMenu = () => {
    return (
        <Container>
            <ButtonContainer>
                <IconButton>
                    <NotificationsIcon fontSize="large" />
                </IconButton> 
            </ButtonContainer>
            <ButtonContainer>
                <IconButton>
                    <ChatIcon fontSize="large" />
                </IconButton>
            </ButtonContainer>
            <ButtonContainer>
                <IconButton>
                    <PeopleAltIcon fontSize="large" />
                </IconButton> 
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.div`
    padding-top: 60px;
    height: 100vh;
    background-color: #464EB8;
`;

const ButtonContainer = styled.div`

`;

export default SideBarMenu

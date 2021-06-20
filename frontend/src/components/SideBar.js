import React from 'react'
import styled from 'styled-components'

import SideBarMenu from './SideBarMenu'
import SideBarConversations from './SideBarConversations'

import './SideBar.css'

const SideBar = () => {
    return (
        <Container>
            <SideBarMenu />
            <SideBarConversations />
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  width: 600px;
`;

export default SideBar
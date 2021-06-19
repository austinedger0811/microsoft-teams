import React from 'react'
import Grid from '@material-ui/core/Grid'

import SideBarMenu from './SideBarMenu'

import './SideBar.css'

const SideBar = () => {
    return (
        <div className="SideBar">
            <Grid container>
                <Grid item xs={2}>
                    <SideBarMenu />
                </Grid>
                <Grid item xs={10}>
                    dfkd
                </Grid>
            </Grid>
        </div>
    )
}

export default SideBar
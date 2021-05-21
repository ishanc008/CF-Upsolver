import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from "./styles"

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" >
            <Toolbar>
                <Typography variant="h2">
                    CF Upsolver
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

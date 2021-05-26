import { AppBar, Avatar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from "./styles"
import { useHistory } from "react-router-dom"
import cflogo from "../../Images/index-removebg-preview.png"

const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();
    const handleOnClick = () => {
        localStorage.clear();
        history.push("/");
    }
    return (
        <AppBar className={classes.appBar} position="static" >
            <Toolbar>
                <Avatar className={classes.avatar} variant="square" src={cflogo} />
                <Typography className={classes.typoGraphy} variant="h2" onClick={handleOnClick}>
                    CF Upsolver
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

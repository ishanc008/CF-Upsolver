import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from "./styles"
import { useHistory } from "react-router-dom"
import cflogo from "../../../Images/index-removebg-preview.png"

const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();
    const handleOnLogout = () => {
        localStorage.clear();
        history.push("/");
    }
    const handleOnClick = () => {
        localStorage.clear();
        history.push("/");
    }
    return (
        <AppBar className={classes.appBar} position="relative" >
            <Toolbar>
                <Avatar className={classes.avatar} variant="square" src={cflogo} />
                <Typography className={classes.typoGraphy} onClick={handleOnClick} variant="h2">
                    CF Upsolver
                </Typography>
                <Button color="secondary" className={classes.button} variant="outlined" onClick={handleOnLogout}>Change User</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

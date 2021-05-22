import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from "./styles"
import { useHistory } from "react-router-dom"

const Navbar = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <AppBar className={classes.appBar} position="static" >
            <Toolbar>
                <Avatar className={classes.avatar} variant="square" src="https://icons-for-free.com/iconfiles/png/512/codeforces-1324440139959685960.png" />
                <Typography className={classes.typoGraphy} variant="h2">
                    CF Upsolver
                </Typography>
                <Button color="secondary" className={classes.button} variant="outlined" onClick={() => history.push("/")}>Change User</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

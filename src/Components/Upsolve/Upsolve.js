import React from "react";
import Navbar from "./Navbar/Navbar";
import { motion } from "framer-motion";
import classes from "./Upsolve.module.css";
import { Button, Typography, Grid } from "@material-ui/core";

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

const Upsolve = (props) => {
    //console.log(props.userInfo?.data?.result);
    const user = props.userInfo?.data?.result[0];
    const userRating = user?.rating;
    const userTitle = (rating) => {
        let title;
        if (rating < 1200) title = ["Newbie", "grey"];
        else if (rating < 1400) title = ["Pupil", "LightGreen"];
        else if (rating < 1600) title = ["Specialist", "cyan"];
        else if (rating < 1900) title = ["Expert", "indigo"];
        else if (rating < 2100) title = ["Candidate Master", "purple"];
        else if (rating < 2300) title = ["Master", "amber"];
        else if (rating < 2400) title = ["International Master", "orange"];
        else if (rating < 2600) title = ["Grandmaster", "red"];
        else if (rating < 3000) title = ["International Grandmaster", "red"];
        else title = ["Legendary Grandmaster", "red"];
        return title;
    };
    const title = userTitle(userRating);
    const maxTitle = userTitle(user.maxRating);
    console.log(title);
    return (
        <div>
            <motion.div initial={{ x: -10, y: 30 }} animate={{ x: 5, y: 30 }} transition={{ ease: "easeOut", duration: 1 }}>
                <Navbar />
            </motion.div>
            <motion.div initial={{ x: -10, y: 30 }} animate={{ x: 5, y: 30 }} transition={{ ease: "easeOut", duration: 1 }} className={classes.Info}>
                <div>
                    <h2 style={{ fontFamily: "cursive", display: "inline" }}>Welcome,</h2>
                    <h2 style={{ fontFamily: "cursive", color: title[1], display: "inline", }}>
                        {user.firstName} {user.lastName}...
                    </h2>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <h3 style={{ display: "inline" }}>Rating- </h3>
                    <h3 style={{ color: title[1], display: "inline" }}>
                        {title[0]} {user.rating}
                    </h3>
                    <h3 style={{ display: "inline" }}>(Max. Rating- </h3>
                    <h3 style={{ color: maxTitle[1], display: "inline" }}>
                        {maxTitle[0]} {user.maxRating})
                    </h3>
                </div>
                <h3>Organization- {user.organization}</h3>
                <h3>Country- {user.country}</h3>
            </motion.div>
            <motion.div initial={{ x: -10, y: 30 }} animate={{ x: 5, y: 30 }} transition={{ ease: "easeOut", duration: 1 }} style={{ flexGrow: 1, marginTop: "10%" }}>
                <Grid container spacing={2} justify="space-evenly">
                    <Grid item xs={6} align="center">
                        <button className={classes.button}>Recommended Problems</button>
                    </Grid>
                    <Grid item xs={6} align="center">
                        <button className={classes.button}>Pending Problems</button>
                    </Grid>
                    <Grid item xs={5} justifyContent="center">
                        <Typography variant="subtitle1" align="center" display="block" style={{ color: "white" }}>Recommended problems are divided in different categories based on your rating like easy, medium and hard. These problems are unsolved problems from your problemset.</Typography>
                    </Grid>
                    <Grid item xs={5} justifyContent="center">
                        <Typography variant="subtitle1" align="center" style={{ color: "white" }}>Pending problems are those problems ,from your problemset , which you have attempted but didn't get an accepted verdict.</Typography>
                    </Grid>
                </Grid>
            </motion.div>
        </div>
    );
};

export default Upsolve;

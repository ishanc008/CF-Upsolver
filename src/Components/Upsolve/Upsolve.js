import React from "react";
import Navbar from "./Navbar/Navbar";
import { motion } from "framer-motion";
import classes from "./Upsolve.module.css";
import { Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const transition = { duration: 0.2, ease: [0.43, 0.13, 0.23, 0.96] };

const Upsolve = () => {
  const history = useHistory();
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  if (!userInfo) {
    alert("Enter a handle");
    history.push("/");
    return <div>login required</div>;
  }
  //   console.log(userInfo);
  const user = userInfo.data.result[0];
  const userRating = user.rating;
  const userTitle = (rating) => {
    let title;
    if (rating < 1200) title = ["Newbie", "gray"];
    else if (rating < 1400) title = ["Pupil", "LightGreen"];
    else if (rating < 1600) title = ["Specialist", "#03a89e"];
    else if (rating < 1900) title = ["Expert", "blue"];
    else if (rating < 2100) title = ["Candidate Master", " #a0a"];
    else if (rating < 2300) title = ["Master", "#ff8c00"];
    else if (rating < 2400) title = ["International Master", "orange"];
    else if (rating < 2600) title = ["Grandmaster", "red"];
    else if (rating < 3000) title = ["International Grandmaster", "red"];
    else title = ["Legendary Grandmaster", "red"];
    return title;
  };
  const title = userTitle(userRating);
  const maxTitle = userTitle(user.maxRating);
  //   console.log(title);
  return (
    <motion.div exit={{ opacity: 0 }} transition={transition}>
      <motion.div
        initial={{ x: -10, y: 10 }}
        animate={{ x: 5, y: 10 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Navbar />
      </motion.div>
      <motion.div
        initial={{ x: -10, y: 30 }}
        animate={{ x: 5, y: 30 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className={classes.Info}
      >
        <div>
          <h2 style={{ fontFamily: "'Ubuntu', sans-serif", display: "inline" }}>
            Welcome,
          </h2>
          <h2
            style={{
              fontFamily: "'Ubuntu', sans-serif",
              color: title[1],
              display: "inline",
            }}
          >
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
      <motion.div
        initial={{ x: -10, y: 30 }}
        animate={{ x: 5, y: 30 }}
        transition={{ ease: "easeOut", duration: 1 }}
        style={{ flexGrow: 1, marginTop: "8%" }}
      >
        <Grid container spacing={1} justify="space-evenly">
          <Grid item xs={4} align="center">
            <button
              onClick={() => history.push("/upsolve/recommended")}
              className={classes.button}
            >
              Recommended Problems
            </button>
          </Grid>
          <Grid item xs={4} align="center">
            <button
              onClick={() => history.push("/upsolve/analysis")}
              className={classes.button}
            >
              Analysis
            </button>
          </Grid>
          <Grid item xs={4} align="center">
            <button
              onClick={() => history.push("/upsolve/pending")}
              className={classes.button}
            >
              Pending Problems
            </button>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="subtitle1"
              align="center"
              display="block"
              style={{ color: "white" }}
            >
              Recommended problems are divided in different categories based on
              your rating like easy, medium and hard. These problems are
              unsolved problems from your problemset.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="subtitle1"
              align="center"
              display="block"
              style={{ color: "white" }}
            >
              Visualize your overall performance on CodeForces.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="subtitle1"
              align="center"
              style={{ color: "white" }}
            >
              Pending problems are those problems , which you have attempted but
              did not get an accepted verdict. You might wanna try them once
              again!
            </Typography>
          </Grid>
        </Grid>
      </motion.div>
    </motion.div>
  );
};

export default Upsolve;

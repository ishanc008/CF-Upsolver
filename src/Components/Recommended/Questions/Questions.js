import React, { useState } from 'react'
import { Grid, Paper, Typography, Chip, Button } from "@material-ui/core";
import useStyles from "./styles"

const Questions = (props) => {
    const classes = useStyles();
    const [easyProbs, setEasyProbs] = useState(props.data.easyProbs)
    const [mediumProbs, setMediumProbs] = useState(props.data.mediumProbs)
    const [hardProbs, setHardProbs] = useState(props.data.hardProbs)
    const [veryHardProbs, setVeryHardProbs] = useState(props.data.veryHardProbs)
    const [easyProblems, setEasyProblems] = useState(easyProbs);
    const [mediumProblems, setMediumProblems] = useState(mediumProbs);
    const [hardProblems, setHardProblems] = useState(hardProbs);
    const [veryHardProblems, setVeryHardProblems] = useState(veryHardProbs);
    const [easy, setEasy] = useState(false);
    const [medium, setMedium] = useState(false);
    const [hard, setHard] = useState(false);
    const [veryHard, setVeryHard] = useState(false);

    function getRandom(arr, n) {
        var result = new Array(n), len = arr.length, taken = new Array(len);
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }

    if (easy) {
        if (easy && easyProbs.length > 5) {
            setEasy(false);
            setEasyProblems(getRandom(easyProbs, 5));
        }
    }

    if (medium) {
        if (medium && mediumProbs.length > 5) {
            setMedium(false);
            setMediumProblems(getRandom(mediumProbs, 5));
            console.log(mediumProblems);
        }
    }

    if (hard) {
        if (hard && hardProbs.length > 5) {
            setHard(false);
            setHardProblems(getRandom(hardProbs, 5));
        }
    }

    if (veryHard) {
        if (veryHard && veryHardProbs.length > 5) {
            setVeryHard(false);
            setVeryHardProblems(getRandom(veryHardProbs, 5));
        }
    }

    return (
        <Grid container spacing={3} justify="center">
            <Grid item xs={8} sm={3}>
                <Paper variant="outlined" elevation={10} className={classes.paper}>
                    <div style={{ display: "flex", order: "1", flexDirection: "column", justifyContent: "center" }}>
                        <Typography variant="h6" align="center">Easy problems</Typography>
                        {
                            easyProbs.length ?
                                easyProblems.map((item, index) => index < 5 && <Chip className={classes.chip} label={`${item.index}) ${item.name} (${item.rating})`} component="a" href={`https://codeforces.com/contest/${item.contestId}/problem/${item.index}`} target="_blank" clickable />) :
                                <Typography className={classes.typography}>You don't have any questions left in this bracket!!!!</Typography>
                        }
                        {
                            easyProbs.length > 5 && <Button color="secondary" size="small" variant="contained" size="small" onClick={() => setEasy(true)} style={{ width: "50%", alignSelf: "center" }}>Randomize</Button>
                        }
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={8} sm={3}>
                <Paper variant="outlined" elevation={10} className={classes.paper}>
                    <div style={{ display: "flex", order: "1", flexDirection: "column", justifyContent: "center" }}>
                        <Typography variant="h6" align="center">Medium problems</Typography>
                        {
                            mediumProbs.length ?
                                mediumProblems.map((item, index) => index < 5 && <Chip className={classes.chip} label={`${item.index}) ${item.name} (${item.rating})`} component="a" href={`https://codeforces.com/contest/${item.contestId}/problem/${item.index}`} target="_blank" clickable />) :
                                <Typography className={classes.typography}>You don't have any questions left in this bracket!!!!</Typography>
                        }
                        {
                            mediumProbs.length > 5 && <Button color="secondary" size="small" variant="contained" size="small" onClick={() => setMedium(true)} style={{ width: "50%", alignSelf: "center" }}>Randomize</Button>
                        }
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={8} sm={3}>
                <Paper variant="outlined" elevation={10} className={classes.paper}>
                    <div style={{ display: "flex", order: "1", flexDirection: "column", justifyContent: "center" }}>
                        <Typography variant="h6" align="center">Hard problems</Typography>
                        {
                            hardProbs.length ?
                                hardProblems.map((item, index) => index < 5 && <Chip className={classes.chip} label={`${item.index}) ${item.name} (${item.rating})`} component="a" href={`https://codeforces.com/contest/${item.contestId}/problem/${item.index}`} target="_blank" clickable />) :
                                <Typography className={classes.typography}>You don't have any questions left in this bracket!!!!</Typography>
                        }
                        {
                            hardProbs.length > 5 && <Button color="secondary" size="small" variant="contained" size="small" onClick={() => setHard(true)} style={{ width: "50%", alignSelf: "center" }}>Randomize</Button>
                        }
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={8} sm={3}>
                <Paper variant="outlined" elevation={10} className={classes.paper}>
                    <div style={{ display: "flex", order: "1", flexDirection: "column", justifyContent: "center" }}>
                        <Typography variant="h6" align="center">Very hard problems</Typography>
                        {
                            veryHardProbs.length ?
                                veryHardProblems.map((item, index) => index < 5 && <Chip className={classes.chip} label={`${item.index}) ${item.name} (${item.rating})`} component="a" href={`https://codeforces.com/contest/${item.contestId}/problem/${item.index}`} target="_blank" clickable />) :
                                <Typography className={classes.typography}>You don't have any questions left in this bracket!!!!</Typography>
                        }
                        {
                            veryHardProbs.length > 5 && <Button color="secondary" size="small" variant="contained" size="small" onClick={() => setVeryHard(true)} style={{ width: "50%", alignSelf: "center" }}>Randomize</Button>
                        }
                    </div>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Questions

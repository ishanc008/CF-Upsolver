import React, { useEffect, useState } from 'react'
import Navbar from "../Upsolve/Navbar/Navbar"
import PieChart from './Charts/PieChart'
import BarChart from './Charts/BarChart'
import { AcceptedProbs } from './Charts/AcProbs'
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const Analysis = () => {
    const history = useHistory();
    const [ACprobs, setACprobs] = useState(null);

    useEffect(() => {
        getAcProbs();
    }, [])

    const userInfo = JSON.parse(localStorage.getItem("profile"));
    if (!userInfo) {
        alert("Enter a handle");
        history.push("/");
        return <div>login required</div>;
    }
    const userHandle = userInfo.data.result[0].handle;


    const getAcProbs = () => {
        if (!ACprobs) {
            AcceptedProbs(userHandle).then((res) => setACprobs(res));
        }
    }
    return (
        <div>
            <Navbar />
            {
                ACprobs ?
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <PieChart AcProbs={ACprobs} />
                        <BarChart AcProbs={ACprobs} />
                    </div> : <CircularProgress />
            }
        </div>
    )
}

export default Analysis
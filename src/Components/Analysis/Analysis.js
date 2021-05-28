import React, { useState } from "react";
import Navbar from "../Upsolve/Navbar/Navbar";
import Tags from "./Charts/Tags";
import { motion } from "framer-motion";
import Rating from "./Charts/Rating";
import { AcceptedProbs } from "./Charts/AcProbs";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const Analysis = () => {
  const history = useHistory();
  const [ACprobs, setACprobs] = useState(null);

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
  };

  if (!ACprobs) {
    getAcProbs();
  }

  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.div exit={{ opacity: 0 }} transition={transition}>
      <Navbar />
      {ACprobs ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Tags AcProbs={ACprobs} />
          <Rating AcProbs={ACprobs} />
        </div>
      ) : (
        <CircularProgress />
      )}
    </motion.div>
  );
};

export default Analysis;

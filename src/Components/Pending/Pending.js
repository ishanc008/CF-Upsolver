import React, { useState } from "react";
import Navbar from "../Upsolve/Navbar/Navbar";
import Questions from "./Questions/Questions";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { pendingProblems } from "./Problems";
import { CircularProgress } from "@material-ui/core";

const Pending = () => {
  const history = useHistory();
  const [data, setData] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  if (!userInfo) {
    alert("Enter a handle");
    history.push("/");
    return <div>login required</div>;
  }
  const userHandle = userInfo.data.result[0].handle;
  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

  if (!data) {
    const probsData = pendingProblems(userHandle);
    probsData.then((res) => !data && setData(res));
  }

  return (
    <>
      {data ? (
        <motion.div exit={{ opacity: 0 }} transition={transition}>
          <motion.div
            initial={{ x: -10, y: 0 }}
            animate={{ x: 5, y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <Navbar />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AccessTimeIcon
                fontSize="large"
                color="secondary"
                style={{ alignSelf: "center" }}
              />
              &nbsp; &nbsp;
              <h1
                style={{ color: "white", fontFamily: "'Ubuntu', sans-serif" }}
              >
                {" "}
                Pending Problems({data.unSolvedProbs.length})
              </h1>
            </div>
            <div style={{ marginTop: "3%" }}>
              <Questions data={data} />
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pending;

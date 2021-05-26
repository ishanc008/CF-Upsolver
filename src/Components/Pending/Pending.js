import React, { useState } from "react";
import Navbar from "../Upsolve/Navbar/Navbar";
import axios from "axios"
import Questions from "./Questions/Questions"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom"


const Pending = () => {
  const history = useHistory();
  const [data, setData] = useState(null);
  const userInfo = JSON.parse(localStorage.getItem("profile"));
  if (!userInfo) {
    alert("Enter a handle")
    history.push("/");
    return (
      <div>login required</div>
    )
  }
  const userHandle = userInfo.data.result[0].handle;
  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
  axios.get(`https://codeforces.com/api/user.status?handle=${userHandle}&from=1`)
    .then((res) => {
      const numberOfSubs = res.data.result.length;

      const allProbs = [];
      for (var x = 0; x < numberOfSubs; x++) {
        allProbs.push(res.data.result[x]);
      }
      const ACprobs = [];

      for (var i = 0; i < numberOfSubs; i++) {
        if (res.data.result[i].verdict === "OK") {
          const Problem = {
            contestId: res.data.result[i].author.contestId,
            name: res.data.result[i].problem.name,
            probIdx: res.data.result[i].problem.index,
          };
          ACprobs.push(Problem);
        }
      }
      //   console.log(numberOfSubs);
      //   console.log(ACprobs);
      //   console.log(allProbs);

      const unSolvedProbs = [];

      for (let i = 0; i < numberOfSubs; i++) {
        let ok = false;
        if (allProbs[i].verdict !== "OK") {
          for (let j = 0; j < ACprobs.length; j++) {
            if (
              allProbs[i].contestId === ACprobs[j].contestId &&
              allProbs[i].problem.index === ACprobs[j].probIdx
            ) {
              ok = true;
              break;
            }
          }

          if (ok === false) {
            unSolvedProbs.push(allProbs[i]);
            ACprobs.push({
              contestId: allProbs[i].contestId,
              name: allProbs[i].problem.name,
              probIdx: allProbs[i].problem.index,
            });
          }
        }
      }

      //   console.log(unSolvedProbs);

      const easyProbs = [];
      const mediumProbs = [];
      const hardProbs = [];
      const veryHardProbs = [];

      for (let prob = 0; prob < unSolvedProbs.length; prob++) {
        if (unSolvedProbs[prob].problem.rating <= 1200) {
          easyProbs.push(unSolvedProbs[prob]);
        } else if (
          unSolvedProbs[prob].problem.rating > 1200 &&
          unSolvedProbs[prob].problem.rating <= 1600
        ) {
          mediumProbs.push(unSolvedProbs[prob]);
        } else if (
          unSolvedProbs[prob].problem.rating > 1600 &&
          unSolvedProbs[prob].problem.rating <= 2200
        ) {
          hardProbs.push(unSolvedProbs[prob]);
        } else if (unSolvedProbs) {
          veryHardProbs.push(unSolvedProbs[prob]);

        }
      }

      const problemData = {
        unSolvedProbs,
        easyProbs,
        mediumProbs,
        hardProbs,
        veryHardProbs,
      };

      if (!data) {
        setData(problemData);
      }

      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });


  return (
    <>
      {
        data &&
        <motion.div exit={{ opacity: 0 }} transition={transition}>
          <motion.div initial={{ x: -10, y: 0 }} animate={{ x: 5, y: 0 }} transition={{ ease: "easeOut", duration: 1 }}>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AccessTimeIcon fontSize="large" color="secondary" style={{ alignSelf: "center" }} />&nbsp;
            &nbsp;<h2 style={{ color: "white", fontFamily: "cursive" }}> Pending Problems({data.unSolvedProbs.length})</h2>
            </div>
            <div style={{ marginTop: "3%" }}>
              {console.log("quqestion called")}
              <Questions data={data} />
            </div>
          </motion.div>
        </motion.div>
      }
    </>
  );
};

export default Pending;

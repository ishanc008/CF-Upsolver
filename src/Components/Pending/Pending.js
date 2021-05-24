import React from "react";
import Navbar from "../Upsolve/Navbar/Navbar";
import { Calc } from "./CalcPending";

const Pending = (props) => {
  const user = props.userInfo?.data?.result[0];
  console.log(user);
  const userHandle = user.handle;
  console.log(userHandle);

  const ProblemData = Calc(userHandle);

  console.log(ProblemData);

  const { unSolvedProbs, easyProbs, mediumProbs, hardProbs, veryHardProbs } =
    ProblemData;

  console.log(unSolvedProbs);

  console.log(easyProbs);
  console.log(mediumProbs);
  console.log(hardProbs);
  console.log(veryHardProbs);

  return (
    <div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Pending;

import axios from "axios";

export function Calc(userHandle) {
  //console.log("caleeddddddaldjaldj akl fjKLS ");
  axios
    .get(`https://codeforces.com/api/user.status?handle=${userHandle}&from=1`)
    .then((res) => {
      //console.log(res);
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

      const data = {
        unSolvedProbs,
        easyProbs,
        mediumProbs,
        hardProbs,
        veryHardProbs,
      };

      console.log(data);

      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

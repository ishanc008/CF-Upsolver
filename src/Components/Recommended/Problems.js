import axios from "axios"

export const getRecommendedProblems = async (userHandle) => {
    const res = await axios.get(`https://codeforces.com/api/user.status?handle=${userHandle}&from=1`);
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

    //console.log(ACprobs.length);

    const unSolvedProbs = [];

    const probSet = await axios.get("https://codeforces.com/api/problemset.problems");
    //console.log(probSet);
    const totalProbs = probSet.data.result.problems.length;
    for (let i = 0; i < totalProbs; i++) {
        let ok = false;
        for (let j = 0; j < ACprobs.length; j++) {
            if (ACprobs[j].contestId === probSet.data.result.problems[i].contestId && ACprobs[j].probIdx === probSet.data.result.problems[i].index) {
                ok = true;
                break;
            }
        }
        if (ok === false) {
            unSolvedProbs.push(probSet.data.result.problems[i]);
        }
    }
    //console.log(unSolvedProbs);

    const rating = await axios.get(`https://codeforces.com/api/user.rating?handle=${userHandle}`);
    const ratingArray = rating.data.result;
    const newRating = ratingArray.map(user => user.newRating);
    newRating.sort();
    newRating.reverse();
    let avgRating, rate = 0;
    let length = (newRating.length);
    if (newRating.length > 30) {
        length = Math.floor(length / 3);
    }
    for (let i = 0; i < length; i++) {
        rate += newRating[i];
    }
    avgRating = Math.floor(rate / length);
    avgRating = Math.round(avgRating / 100) * 100;
    console.log(avgRating);

    const easyProbs = [];
    const mediumProbs = [];
    const hardProbs = [];
    const veryHardProbs = [];

    for (let i = 8; i < unSolvedProbs.length; i++) {
        if (avgRating < 2000) {
            if (unSolvedProbs[i].rating < avgRating - 200) {
                easyProbs.push(unSolvedProbs[i]);
            }
            else if (unSolvedProbs[i].rating >= avgRating - 200 && unSolvedProbs[i].rating <= avgRating + 200) {
                mediumProbs.push(unSolvedProbs[i]);
            }
            else if (unSolvedProbs[i].rating > avgRating + 200 && unSolvedProbs[i].rating <= avgRating + 600) {
                hardProbs.push(unSolvedProbs[i]);
            }
            else {
                veryHardProbs.push(unSolvedProbs[i]);
            }
        }
        else if (avgRating > 2000 && avgRating < 3000) {
            if (unSolvedProbs[i].rating <= 1600) {
                easyProbs.push(unSolvedProbs[i]);
            }
            else if (unSolvedProbs[i].rating > 1600 && unSolvedProbs[i].rating <= 2200) {
                mediumProbs.push(unSolvedProbs[i]);
            }
            else if (unSolvedProbs[i].rating > 2200 && unSolvedProbs[i].rating <= 2800) {
                hardProbs.push(unSolvedProbs[i]);
            }
            else {
                veryHardProbs.push(unSolvedProbs[i]);
            }
        }
        else if (avgRating > 3000) {
            if (unSolvedProbs[i].rating <= 1800) {
                easyProbs.push(unSolvedProbs[i]);
            }
            else if (unSolvedProbs[i].rating > 1800 && unSolvedProbs[i].rating <= 2400) {
                mediumProbs.push(unSolvedProbs[i]);
            }
            else if (unSolvedProbs[i].rating > 2400 && unSolvedProbs[i].rating <= 2900) {
                hardProbs.push(unSolvedProbs[i]);
            }
            else {
                veryHardProbs.push(unSolvedProbs[i]);
            }
        }
    }

    const recommendedProblemData = {
        easyProbs,
        mediumProbs,
        hardProbs,
        veryHardProbs,
    };

    //console.log(recommendedProblemData);
    return recommendedProblemData;
}
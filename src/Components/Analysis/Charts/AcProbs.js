import axios from "axios"

export const AcceptedProbs = async (userHandle) => {
    const res = await axios.get(
        `https://codeforces.com/api/user.status?handle=${userHandle}&from=1`
    );
    //console.log(res);
    const numberOfSubs = res.data.result.length;

    const allProbs = [];
    for (var x = 0; x < numberOfSubs; x++) {
        allProbs.push(res.data.result[x]);
    }
    const ACprobs = [];

    for (var i = 0; i < numberOfSubs; i++) {
        if (res.data.result[i].verdict === "OK") {
            ACprobs.push(res.data.result[i]);
        }
    }

    console.log(ACprobs);
    return ACprobs;
}
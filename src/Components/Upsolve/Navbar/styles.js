import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: "10px",
    marginTop: "4%",
    marginLeft: "25%",
    borderRadius: "50px 20px",
    background: "linear-gradient(45deg , #004e92 , #000428)",

    transform: "translateY(-50%)",
    width: "50%",
    //boxShadow: "0 1px 10px #cc2b5e, 0 0 20px  #753a88"

    ["@media (max-width:1240px)"]: {
      padding: "8px",
    },
    ["@media (max-width:1130px)"]: {
      padding: "6px",
    },

    ["@media (max-width:1060px)"]: {
      padding: "4px",
    },
  },
  typoGraphy: {
    fontFamily: "Open Sans",
    color: "#ffa500",
    fontSize: "50px",
    ["@media (max-width:1240px)"]: {
      fontSize: "30px",
    },
    ["@media (max-width:1130px)"]: {
      fontSize: "25px",
    },

    ["@media (max-width:1060px)"]: {
      fontSize: "20px",
    },
    ["@media (max-width:995px)"]: {
      fontSize: "15px",
    },
  },
  avatar: {
    marginRight: "20px",
    height: "75px",
    width: "75px",
    ["@media (max-width:1240px)"]: {
      height: "45px",
      width: "45px",
    },
    ["@media (max-width:1130px)"]: {
      height: "30px",
      width: "30px",
    },
  },
  button: {
    marginLeft: "20%",
    ["@media (max-width:890px)"]: {
      marginLeft: "15%",
      fontSize: "10px",
    },
    ["@media (max-width:611px)"]: {
      marginLeft: "10%",
      fontSize: "7px",
    },
  },
}));

export default useStyles;

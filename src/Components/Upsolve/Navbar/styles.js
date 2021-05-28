import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: "10px",
    marginTop: "4%",
    marginLeft: "25%",
    marginBottom: "1%",
    borderRadius: "50px 20px",
    background: "#0f2027",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
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
      marginLeft: "20%",
      padding: "4px",
    },
  },
  typoGraphy: {
    fontFamily: "'Ubuntu', sans-serif",
    color: "#FF6037",
    fontSize: "35px",
    '&:hover': {
      cursor: "pointer"
    },
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
    ["@media (max-width:600px)"]: {
      fontSize: "10px",
    },
    ["@media (max-width:450px)"]: {
      fontSize: "8px",
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
    ["@media (max-width:700px)"]: {
      height: "25px",
      width: "25px",
    },
    ["@media (max-width:450px)"]: {
      height: "20px",
      width: "20px",
    },
  },
  button: {
    marginLeft: "30%",
    fontFamily: "'Ubuntu', sans-serif",
    ["@media (max-width:890px)"]: {
      marginLeft: "15%",
      fontSize: "10px",
    },
    ["@media (max-width:611px)"]: {
      marginLeft: "10%",
      fontSize: "7px",
    },
    ["@media (max-width:611px)"]: {
      marginLeft: "5%",
      fontSize: "5px",
    }
  },
}));

export default useStyles;

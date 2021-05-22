import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    padding: "10px",
    marginTop: "10px",
    borderRadius: "50px 20px",
    background: "linear-gradient(45deg , #004e92 , #000428)",
    position: "absolute",
    top: "37%",
    left: "26%",
    transform: "translateY(-50%)",
    width: "50%",
    ['@media (max-width:611px)']: {
      left: "16%",
      width: "75%"
    },
    //boxShadow: "0 1px 10px #cc2b5e, 0 0 20px  #753a88"
  },
  typoGraphy: {
    fontFamily: "Open Sans",
    color: "#ffa500",
    fontSize: "50px",
    ['@media (max-width:890px)']: {
      fontSize: "30px"
    },
    ['@media (max-width:611px)']: {
      fontSize: "20px"
    },
  },
  avatar: {
    marginRight: "20px",
    height: "75px",
    width: "75px",
    ['@media (max-width:890px)']: {
      height: "45px",
      width: "45px",
    },
    ['@media (max-width:611px)']: {
      height: "30px",
      width: "30px",
    },
  },
  button: {
    marginLeft: "20%",
    ['@media (max-width:890px)']: {
      marginLeft: "15%",
      fontSize: "10px"
    },
    ['@media (max-width:611px)']: {
      marginLeft: "10%",
      fontSize: "7px"
    },
  }
}));

export default useStyles;

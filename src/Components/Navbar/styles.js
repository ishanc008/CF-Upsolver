import { makeStyles } from "@material-ui/core/styles"

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
        width: "50%"
        //boxShadow: "0 1px 10px #cc2b5e, 0 0 20px  #753a88"
    },
    typoGraphy: {
        fontFamily: 'Open Sans',
        color: "red"
    },
    avatar: {
        marginRight: "20px",
        height: "75px",
        width: "75px"
    }
}))

export default useStyles
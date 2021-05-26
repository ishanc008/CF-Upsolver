import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        color: "red",
        borderColor: "red",
        background: "#0f2027",
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    },
    chip: {
        margin: theme.spacing(2),
    },
    typography: {
        color: "white",
        marginTop: "5%",
        fontFamily: "cursive",
    }
}));
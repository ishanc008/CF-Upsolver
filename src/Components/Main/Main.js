import { useState } from "react";
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import { useHistory } from "react-router-dom"
import classes from "./styles.module.css";
import { motion } from "framer-motion"

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

const Main = (props) => {
  const [cfHandle, setCfHandle] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const handleOnChange = (e) => {
    setCfHandle(e.target.value);
    setError("");
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(cfHandle);
    axios.get(`https://codeforces.com/api/user.info?handles=${cfHandle}`)
      .then((res) => {
        //console.log(res);
        props.setUserInfo(res);
        setCfHandle("");
        history.push("/upsolve");
      })
      .catch(err => {
        console.log(err.response.data.comment);
        setError("Handle not found");
      })
  }

  return (
    <motion.div exit={{ opacity: 0 }} transition={transition} >
      <Navbar />
      <div className={classes.button}>
        <input
          className={classes["c-checkbox"]}
          type="checkbox"
          id="checkbox"
        />
        <div className={classes["c-formContainer"]}>
          <form className={classes["c-form"]} onSubmit={handleOnSubmit} >
            <input
              className={classes["c-form__input"]}
              placeholder="CF Handle"
              type="text"
              value={cfHandle}
              onChange={handleOnChange}
              required
            />
            <div className={classes["c-form__buttonLabel"]}>
              <button className={classes["c-form__button"]} type="submit" >
                Submit
            </button>
            </div>
            <label
              className={classes["c-form__toggle"]}
              for="checkbox"
              data-title="Enter CF Handle"
            ></label>
          </form>
          <p>{error}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;

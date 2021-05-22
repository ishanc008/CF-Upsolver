import { useState } from "react";
import axios from "axios"
import classes from "./styles.module.css";

const Main = () => {
  const [cfHandle, setCfHandle] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    setCfHandle(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(cfHandle);
    axios.get(`https://codeforces.com/api/user.info?handles=${cfHandle}`)
      .then((res) => console.log(res))
      .catch(err => {
        console.log(err.response.data.comment);
        setError(err.response.data.comment);
      })
    setCfHandle("");
  }

  return (
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
        <p style={{ color: "red" }}>error</p>
      </div>
    </div>
  );
};

export default Main;

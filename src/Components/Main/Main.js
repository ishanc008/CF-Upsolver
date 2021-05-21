import classes from "./styles.module.css"
import RefreshIcon from '@material-ui/icons/Refresh';
import { useState } from "react";

const Main = () => {
    const [buttonClass, setButtonClass] = useState(`${classes.refreshIcon} ${classes.refreshIconHide}`)
    const handleOnChange = (e) => {
        if (e.target.checked) {
            setButtonClass(`${classes.refreshIcon}`);
        }
    }
    return (
        <div className={classes.button}>
            <input className={classes["c-checkbox"]} type="checkbox" id="checkbox" onChange={handleOnChange} />
            <div className={classes["c-formContainer"]}>
                <form className={classes["c-form"]} action="">
                    <input className={classes["c-form__input"]} placeholder="E-mail" type="text" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required />
                    <label className={classes["c-form__buttonLabel"]} for="checkbox">
                        <button className={classes["c-form__button"]} type="button">Send</button>
                    </label>
                    <label className={classes["c-form__toggle"]} for="checkbox" data-title="Notify me"></label>
                </form>
                <div className={buttonClass}>
                    <RefreshIcon />
                </div>
            </div>
        </div>
    )
}

export default Main

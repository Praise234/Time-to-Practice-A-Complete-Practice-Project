
import Button from "../Input/Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
    return (
        <div className= {classes['modal-overlay']}>
            <div className= {classes.modal}>
                <div className={classes['modal-title']}>
                    <h2>Invalid input</h2>
                </div>
                <div className={classes['modal-body']}>
                    <p>{props.errMsg}</p>
                </div>
                <div className={classes['modal-btn']}>
                    <Button text = {"Okay"} onButtonClick = {props.onOkay} />
                </div>
            </div>
        </div>
    );
}

export default ErrorModal;
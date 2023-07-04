import classes from "./InputElement.module.css";
import Button from "./Button";
import { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";

const InputElement = (props) => {

    const [username, setUsername] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [age, setAge] = useState(0);
    const usernameHandler = (event) => {
        setUsername(event.target.value.toString());
    }
    const ageHandler = (event) => {
        setAge(event.target.value.toString());
    }
    const buttonClickHandler = () => {
        if(username === "" && age < 1){
            setErrorMsg("Please enter a valid name and age (non-empty values)");
        }else if(username === ""){
            setErrorMsg("Please enter a valid name (non-empty value)");
        }else if(age < 1){
            setErrorMsg("Please enter a valid age (> 0)");
        }else{
            props.addNewUser({"id": (Math.random().toString()), "username": username, "age": age});
            setUsername("");
            setAge(0);
        }
    }

    const hideErrorModal = () => {
        setErrorMsg("");
    }
   


    return (
        <div>
            <div className={classes["input__holder"]}>
                <div className={classes["input__container"]}>
                    <label>Username</label>
                    <input type="text" name= "username" value={username} onChange={usernameHandler} />
                </div>
                <div className={classes["input__container"]}>
                    <label>Age (Years)</label>
                    <input type="number" name ="age"  value={age} onChange={ageHandler} />
                </div>
                <div className={classes["input__container"]}>
                    <Button text = {"Add User"} onButtonClick = {buttonClickHandler} />
                </div>
            </div>
            {(errorMsg !== "") && <ErrorModal errMsg = {errorMsg} onOkay = {hideErrorModal} />}
        </div>
    );
}

export default InputElement;
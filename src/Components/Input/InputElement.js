import classes from "./InputElement.module.css";
import Button from "./Button";
import { useState, useRef } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";

const InputElement = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [errorMsg, setErrorMsg] = useState("");
    
    const buttonClickHandler = () => {
        const enteredUserName = nameInputRef.current.value;
            const enteredUserAge = ageInputRef.current.value;
        if(enteredUserName === "" && enteredUserAge < 1){
            setErrorMsg("Please enter a valid name and age (non-empty values)");
        }else if(enteredUserName === ""){
            setErrorMsg("Please enter a valid name (non-empty value)");
        }else if(enteredUserAge < 1){
            setErrorMsg("Please enter a valid age (> 0)");
        }else{
            props.addNewUser({"id": (Math.random().toString()), "username": enteredUserName, "age": enteredUserAge});
            nameInputRef.current.value = "";
            ageInputRef.current.value = 0;
        }
    }

    const hideErrorModal = () => {
        setErrorMsg("");
    }
   


    return (
        <>
            <div className={classes["input__holder"]}>
                <div className={classes["input__container"]}>
                    <label>Username</label>
                    <input type="text" name= "username" ref={nameInputRef} />
                </div>
                <div className={classes["input__container"]}>
                    <label>Age (Years)</label>
                    <input type="number" name ="age" ref={ageInputRef} />
                </div>
                <div className={classes["input__container"]}>
                    <Button text = {"Add User"} onButtonClick = {buttonClickHandler} />
                </div>
            </div>
            {(errorMsg !== "") && <ErrorModal errMsg = {errorMsg} onOkay = {hideErrorModal} />}
        </>
    );
}

export default InputElement;
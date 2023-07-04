
import classes from "./UserData.module.css";

const UserData = (props) => {
    const deleteRecordHandler = () => {
        props.delHandle(props.id);
    }
    return (
        <div onClick= {deleteRecordHandler} className={classes["data-row"]}>
            {props.username} ({props.age} years old)
        </div>
    );
}

export default UserData;
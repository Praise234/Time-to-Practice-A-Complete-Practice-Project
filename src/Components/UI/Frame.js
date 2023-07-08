import Card from "./Card";
import InputElements from "../Input/InputElement";
import Output from "../Output/Output";


const Frame = (props) => {
    return (
        <>
            <Card>
                <InputElements addNewUser = {props.addUser} />
            </Card>
            {(props.allUsers.length > 0) && <Output deleteHandler = {props.onDelete} users= {props.allUsers}/>}
        </>
    );
}


export default Frame;
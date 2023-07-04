import Card from "../UI/Card";
import UserData from "./UserData";

const Output = (props) => {
    return (
        <Card>
            {props.users.map((item) => <UserData delHandle = {props.deleteHandler} key = {item.id} username={item.username} id = {item.id} age={item.age} />)}
        </Card>
        
    );
}

export default Output;
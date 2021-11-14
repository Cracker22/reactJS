import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch,useSelector } from 'react-redux';
import { userList } from "../../components/redux/action/action"
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch=useDispatch()
    let userListData = useSelector(state => state);
console.log(userList,'singnup')
    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
    
        let userCheck=userListData.allImages.user.findIndex(user=>user.email===email)
        if(userCheck>-1)
        alert("Email already exist")
        else{
            alert("User added successfully")
        dispatch(userList({email:email,password:password}))}
    }

    return (<>
   
        <div className="Signup">
        <h2 className="mb-4">Sign Up</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button className={"mt-2"} block size="sm" type="submit">
                    SignUp
                </Button>
            </Form>
        </div>
    </>)
}

export default Signup;
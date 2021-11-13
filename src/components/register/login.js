import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let userList = useSelector(state => state);
    const navigate = useNavigate();

     console.log(userList,'devil')
    function handleSubmit(event) {
        console.log(event)
        event.preventDefault();
        console.log(email,password,'devil lof=gin')
        let findUser=userList.allImages.user.findIndex(user=>user.email==email && user.password==password)
        if(findUser>-1)
        navigate('/hub')
         else 
         alert("Invalid User")
      
    }
    return (
        <>
            <div className="Login">
            <h2 className="mb-4">Login</h2>
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
                        Login
                    </Button>
                </Form>
            </div>
        </>)
}

export default Login;
import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleSubmit(event) {
        console.log(event)
        event.preventDefault();
    }
    return (
        <>
            <div className="Login">
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
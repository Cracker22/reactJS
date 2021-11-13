import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import { memo } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Routes , Route, Link,useNavigate  } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function Signup(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function storeUser(){

    console.log(email,password,'devil ')

  }
  return(
    <div className="Signup">
    <Form onSubmit={storeUser}>
      <Form.Group size="lg" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button className={"mt-2"} block size="sm" type="submit" disabled={!validateForm()} >
        Submit
      </Button>
    </Form>
  </div>
  )


}

function Login(props) {
  const isLogin=props.isLogin
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
      console.log(event)
    event.preventDefault();
    // <useNavigate  to="/hub" />
  }

  console.log(isLogin)

  if(isLogin){

    return (
      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Link  to="/hub" >   <Button className={"mt-2"} block size="sm" type="submit" disabled={!validateForm()}>
            Login 
          </Button></Link>
        
        </Form>
      </div>
    );
  }
   return(<Signup />)
}
function Register(){
 // const isLoginApp=false
//  function setIsLoggedInFunc(data){

//   isLoggedIn=data
//  // setIsLoggedIn(data)
//  }

  const [isLoginApp, setIsLoginApp] = useState(true);
  const Col="input";
  const cardClass={"padding": "10vh",
      "paddingLeft": "35vh",
      "paddingRight": "35vh"}
  const active={"fontWeight":"bold"}    
return(
    <div>
      <Container className={"mt-2"}>
         <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Photo Hub
      </Navbar.Brand>
 
    <Nav>
      {!isLoginApp && <Nav.Link style={active}  href="#signup"  onClick={() => setIsLoginApp(false)}>SignUp</Nav.Link>}
      {isLoginApp && <Nav.Link  href="#signup" onClick={() => setIsLoginApp(false)}>SignUp</Nav.Link>}
      {isLoginApp &&   <Nav.Link  style={active} href="#login" onClick={() => setIsLoginApp(true)}>
        Login
      </Nav.Link>}
    
      {!isLoginApp &&   <Nav.Link  style={active} href="#login" onClick={() => setIsLoginApp(true)}>
        Login
      </Nav.Link>}
    </Nav>
    </Container>
  </Navbar>
  <div style={cardClass}>
  <Card>
  <Card.Body>
  <Login isLogin={isLoginApp} />
  </Card.Body>
</Card>


</div>
  </Container>

    </div>
 
  )


}



export default memo(Register);

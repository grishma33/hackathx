import { Container } from "react-bootstrap";
import { Form, Button } from 'react-bootstrap'; 
// import Home from "./Home";
// import Signup from "./Signup";
import {  Link } from "react-router-dom";
import { Component } from "react";


class Login extends Component {
    
  constructor(props) {
      super(props);

      this.state = {
          u_name: '',
          pwd: ''
      };
      
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({[name]: value});
      // console.log(`${name}: ${value}`);
  }

  handleSubmit(e) {
      e.preventDefault();
      this.loadData();
  }

  async loadData() {
      const {u_name, pwd} = this.state;
  try {
    const res = await fetch('http://localhost:8000/profile', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({u_name, pwd}),
          });
    const result = await res.json();
    console.log(result);
          if (!result) {
              alert('User not found. Please Register!');
              return;
          }
          alert(`User Authenticated Successfully.`);
          this.props.action(result[0]);
  }
  catch(err) {
    console.log(err);
  }
  }

render() {
  return (
    <>
      <Container>
            <Form className="login">
                    <h3>Log In</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="u_name" type="email" value={this.state.u_name} onChange={this.handleInputChange} placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="pwd" type="password" value={this.state.pwd} onChange={this.handleInputChange} placeholder="Enter password" />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <br/>
                    <Button onClick={this.handleSubmit} variant="dark" type="submit" size="lg" block>
                        Log In
                    </Button>
                    <p className="forgot-password text-rigth">
                        Forgot <a href="/">password?</a>
                    </p>
                    <p className="forgot-password text-right">
                        Don't have an account? <Link to={"/signup"}>Sign Up</Link>
                    </p>
                    {/* <Switch>
                        <Route path="/signup" component={Signup} />
                        <Route path="/" component={Home} /> */}
                        {/* <Redirect from="/sign-in" to="/profile" /> */}
                    {/* </Switch> */}
            </Form>
      </Container>
    </>
  );
}
}

export default Login;
import { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    email: "",
  };

  state = this.initialState;

  handelChange = (event) => {
    const {name, value} = event.target;
    console.log({name, value});
    this.setState({[name]: [value]});
  }

  submitForm = () => {
    let newUser = this.state;
    this.props.handelSubmit(newUser);
    this.setState(this.initialState);
  }

  render() {
    return (
      <form action="">
        <label htmlFor="name">Name</label>
        <input onChange={this.handelChange} type="text" name="name" value={this.state.name} id="name" />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" onChange={this.handelChange} name="email" value={this.state.email} id="email" />
        <br />
        <input type="button" onClick={this.submitForm} value="Submit" />
      </form>
    );
  }
}


export default Form;
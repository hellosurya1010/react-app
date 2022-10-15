import { Component } from "react";

class Users extends Component{

    state = {
        users: [],
    }

    componentDidMount(){
        let url = "https://random-data-api.com/api/users/random_user?size=5";
        fetch(url).then(result => result.json()).then(users => { this.setState({users}) });
    }

    render(){

        let liEl = this.state.users.map((li, index) => <li key={index}>{li.first_name}</li>);

        return (
            <ul>{liEl}</ul>
        );
    }
}

export default Users;
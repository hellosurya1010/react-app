import { Component } from "react";
import Table from "../components/Table"


class Index extends Component{


    state = {
        users: [
            {
                id: 1,
                name: "surya", 
                email: "surya@gmail.com",
            },
            {
                id: 2,
                name: "mani", 
                email: "mani@gmail.com",
            },
            {
                id: 3,
                name: "sesha", 
                email: "sesha@gmail.com",
            },
        ],
    }    

    deleteTr = (index) => {
        let {users} = this.state;
        users = users.filter((user, i) => i !== index);
        console.log({users, index});
        this.setState({users: users});
    }

    render(){

        const {users} = this.state;
        return (
            <div>
                <h1>Table 1</h1>
                <Table  deleteTr={this.deleteTr} users={users}/>
                <h1>Table 2</h1>
            </div>
        );
    }
}

export default Index;
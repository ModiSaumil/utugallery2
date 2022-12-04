import React, { useState, useEffect, Component } from 'react';
import { useNavigate, Link } from "react-router-dom";

class Viewerlist extends Component {

    state = {
        items: [],
    };

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("http://localhost:5000/getViewers")
            .then((res) => res.json())
            .then(items => this.setState({
                items
            }))
    }



    render() {

        console.log(this.state.items)

        return (
            <div className="photographerlist">
                <h1 className="h1tag">All Viewer list </h1>
                <ul>
                    <li>Index no.</li>
                    <li>First name</li>
                    <li>lname</li>
                    <li>enrollmentno</li>
                    <li>contactno</li>
                    <li>emailid</li>
                    <li>Operation</li>
                </ul>
                {
                    this.state.items ? this.state.items.map((user, items) =>

                    (<ul key={user._id}>
                        <li>{items + 1}</li>
                        <li>{user.fname}</li>
                        <li>{user.lname}</li>
                        <li>{user.enrollmentno}</li>
                        <li>{user.contactno}</li>
                        <li>{user.emailid}</li>
                        <li><button>Delete</button>
                            {/* <Link to={"/Uppdate/"+user._id}>Update</Link> */}
                        </li>

                    </ul>
                    )) :
                        <h3>loading</h3>
                }
            </div>
        );
    }
}


export default Viewerlist;
import React, { useState, useEffect, Component } from 'react';
import { useNavigate, Link } from "react-router-dom";

class Displaycategory extends Component {

    state = {
        items: [],
    };

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("http://localhost:5000/getcategories")
            .then((res) => res.json())
            .then(items => this.setState({
                items
            }))
    }



    render() {

        console.log(this.state.items)

        return (
            <div className="product-list">
                <h1 className="h1tag">All categories list </h1>
                <ul>
                    <li>Index no.</li>
                    <li>Category</li>
                    <li>Operation</li>
                </ul>
                {
                    this.state.items ? this.state.items.map((cat, items) =>

                    (<ul key={cat._id}>
                        <li>{items + 1}</li>
                        <li>{cat.category}</li>

                        
                        <li><button>Delete</button>
                            <Link to={"/Uppdate/"+cat._id}>Update</Link>
                        </li>

                    </ul>
                    )) :
                        <h3>loading</h3>
                }
            </div>
        );
    }
}


export default Displaycategory;
import React, { useState, useEffect, Component } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Displaycategory = () => {
    const [photo, setPhoto] = React.useState([]);

    useEffect(() => {
        getalllist();
    }, [])

    const getalllist = async () => {
        let result = await fetch("http://localhost:5000/getcategories");
        result = await result.json();
        setPhoto(result)
    }
    console.warn("photo", photo);

    const deleteProduct = async(id)=>{
        let result = await fetch(`http://localhost:5000/delete_category/${id}`,{
            method:"Delete"
        });
        result = await result.json()
        if(result){
            getalllist();
        }
    }

    return (
        <div>
            <h1>Category list</h1>
            <table className='tablecss'>
                <thead>
                    <tr className='trcss'>
                        <th>SR No.</th>
                        <th>Category</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        photo.length > 0 ? photo.map((item, index) => (
                            <tr key={item._id} className='trcss'>
                                <td className='tdcss'>{index + 1}</td>
                                <td className='tdcss'>{item.category}</td>
                                <td className='tdcss'><button onClick={()=>deleteProduct(item._id)}>Delete</button>
                                <Link to={"/Uppdate/" + item._id}>Update</Link></td>
                            </tr>
                        ))
                            : <tr> <td><strong>No Records
                                Founds!</strong></td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Displaycategory;























// import React, { useState, useEffect, Component } from 'react';
// import { useNavigate, Link } from "react-router-dom";

// class Displaycategory extends Component {

//     state = {
//         items: [],
//     };

//     // ComponentDidMount is used to
//     // execute the code 
//     componentDidMount() {
//         fetch("http://localhost:5000/getcategories")
//             .then((res) => res.json())
//             .then(items => this.setState({
//                 items
//             }))
//     }



//     render() {

//         console.log(this.state.items)

//         return (
//             <div className="product-list">
//                 <h1 className="h1tag">All categories list </h1>
//                 <ul>
//                     <li>Index no.</li>
//                     <li>Category</li>
//                     <li>Operation</li>
//                 </ul>
//                 {
//                     this.state.items ? this.state.items.map((cat, items) =>

//                     (<ul key={cat._id}>
//                         <li>{items + 1}</li>
//                         <li>{cat.category}</li>

                        
//                         <li><button>Delete</button>
//                             <Link to={"/Uppdate/"+cat._id}>Update</Link>
//                         </li>

//                     </ul>
//                     )) :
//                         <h3>loading</h3>
//                 }
//             </div>
//         );
//     }
// }


// export default Displaycategory;



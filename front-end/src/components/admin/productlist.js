import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
    const [photo, setPhoto] = React.useState([]);

    useEffect(() => {
        getalllist();
    }, [])

    const getalllist = async () => {
        let result = await fetch("http://localhost:5000/getphotos");
        result = await result.json();
        setPhoto(result)
    }
    console.warn("photo", photo);

                const deleteProduct = async(id)=>{
                    let result = await fetch(`http://localhost:5000/delete_photo/${id}`,{
                        method:"Delete"
                    });
                    result = await result.json()
                    if(result){
                        getalllist();
                    }
                }


    return (
        <div>
            <h3>All Photos list</h3>
            <table className='tablecss'>
                <thead>
                    <tr className='trcss'>
                        <th>SR No.</th>
                        <th>userid</th>
                        <th>img name</th>
                        <th>tag</th>
                        <th>category</th>
                        <th>photo</th>
                        <th>operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        photo.length > 0 ? photo.map((item, index) => (
                            <tr key={item._id} className='trcss'>
                                <td className='tdcss'>{index + 1}</td>
                                <td className='tdcss'>{item.userid}</td>
                                <td className='tdcss'>{item.imgname}</td>
                                <td className='tdcss'>{item.tag}</td>
                                <td className='tdcss'>{item.category}</td>
                                <td className='tdcss'>{item ?
                                    <img src="../categories/" alt={item.imgname} />
                                    :
                                    <span>deleted</span>
                                }</td>
                                <td className='tdcss'><button onClick={()=>deleteProduct(item._id)}>Delete</button>
                                <Link to={"/update/" + item._id}>Update</Link></td>
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

export default ProductList;






















// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class ProductList extends Component {

//     state = {
//         items: [],
//     };

//     // ComponentDidMount is used to
//     // execute the code 
//     componentDidMount() {
//         fetch("http://localhost:5000/getphotos")
//             .then((res) => res.json())
//             .then(items => this.setState({
//                 items
//             }))
//     }


//         render() {

//             console.log(this.state.items)

//             return (
//                 <div className="product-list">
//                     <h1 className="h1tag">All Photos list </h1>
//                     <ul>
//                         <li>Index no.</li>
//                         <li>User id</li>
//                         <li>Photo name</li>
//                         <li>Tags</li>
//                         <li>Photo</li>
//                         <li>Operation</li>
//                     </ul>
//                     {
//                         this.state.items ? this.state.items.map((img, items) =>

//                         (<ul key={img._id}>
//                             <li>{items + 1}</li>
//                             <li>{img.userid}</li>
//                             <li>{img.imgname}</li>
//                             <li>{img.tag}</li>

//                             <li>{img ?
//                                 <img src="../categories/img.photo" alt={img.imgname} />
//                                 :
//                                 <span>deleted</span>
//                             }</li>
//                             <li><button>Delete</button>
//                                 <Link to={"/photoupdate/" + img._id}>Update</Link>
//                             </li>

//                         </ul>
//                         )) :
//                             <h3>loading</h3>
//                     }
//                 </div>
//             );
//         }
//     }



// const ProductList =()=>{

//      const [products, setProducts] = useState('');

//      useEffect(() => {
//         getProducts();

//     }, [])

//      const getProducts = async () => {
//          let result = await fetch('http://localhost:5000/getphotos');
//          result = await result.json();
//          setProducts(result);
//          //console.warn(result);
//      }

//         const deleteProduct = async(id)=>{
//             let result = await fetch(`http://localhost:5000/delete_photo/${id}`,{
//                 method:"Delete"
//             });
//             result = await result.json()
//             if(result){
//                 getProducts();
//             }
//         }



//      return (
//         <div className = "product-list">
//             <h1> Photo list </h1>
//                <input type="text" className="searchbox" placeholder="search any tags.." onChange={searchHandle}></input>
//                 <ul>
//                  <li>Index no.</li>
//                  <li>User id</li>
//                  <li>Photo name</li>
//                  <li>Tags</li>
//                  <li>Photo</li>
//                  <li>Operation</li>
//              </ul>

//           {

//             products.map((item,index)=>
//               <ul key={item}>
//                   <li>{index+1}</li>
//                   <li>{item.userid}</li>
//                   <li>{item.imgname}</li>
//                   <li>{item.tag}</li>
//                   <li><img src={item.photo} alt="dp"></img></li>
//                   <li><button onclick={deleteProduct}>Delete</button>
//                       <Link to={"/update/"+img._id}>Update</Link>
//                   </li>
//               </ul>

//              /* setProducts.map((item,index)=>
//              <ul key={item}>
//                  <li>{index+1}</li>
//                  <li>{item.imgname}</li>
//                  <li>{item.tag}</li>
//                  <li>{item.userid}</li>
//                  <li><button >Delete</button></li>
//              </ul> */
//              )

//           }

//          </div>

//      )
// }

// export default ProductList;
























// import React, {Component } from "react";
// import { Link } from "react-router-dom";

// class ProductList extends Component {
    
//         state = {
//             items: [],
//         };

//     // ComponentDidMount is used to
//     // execute the code 
//     componentDidMount() {
//         fetch("http://localhost:5000/getphotos")
//             .then((res) => res.json())
//             .then(items=> this.setState({
//                     items }))
// }

        

//     render() {
        
//         console.log(this.state.items)

//         return (
//         <div className = "product-list">
//             <h1 className="h1tag">All Photos list </h1> 
//                 <ul>
//                  <li>Index no.</li>
//                  <li>User id</li>
//                  <li>Photo name</li>
//                  <li>Tags</li>
//                  <li>Photo</li>
//                  <li>Operation</li>
//              </ul>
//     {
//         this.state.items ? this.state.items.map((img,items) =>

//         (<ul key={img._id}>
//             <li>{items+1}</li>
//             <li>{img.userid}</li>
//             <li>{img.imgname}</li>
//             <li>{img.tag}</li>
                 
//         <li>{img ? 
//         <img src="../categories/img.photo" alt={img.imgname}/>
//         :
//         <span>deleted</span>
//         }</li>
//         <li><button>Delete</button>
//             <Link to={"/update/"+img._id}>Update</Link>
//         </li>

//         </ul>
//         )):
//         <h3>loading</h3>
//         }
//         </div>
//     );
// }
// }



// const ProductList =()=>{

//      const [products, setProducts] = useState('');
       
//      useEffect(() => {
//         getProducts();

//     }, [])

//      const getProducts = async () => {
//          let result = await fetch('http://localhost:5000/getphotos');
//          result = await result.json();
//          setProducts(result);
//          //console.warn(result);
//      }
    
//         const deleteProduct = async(id)=>{
//             let result = await fetch(`http://localhost:5000/delete_photo/${id}`,{
//                 method:"Delete"
//             });
//             result = await result.json()
//             if(result){
//                 getProducts();
//             }
//         }



//      return (
//         <div className = "product-list">
//             <h1> Photo list </h1>
//                <input type="text" className="searchbox" placeholder="search any tags.." onChange={searchHandle}></input>
//                 <ul>
//                  <li>Index no.</li>
//                  <li>User id</li>
//                  <li>Photo name</li>
//                  <li>Tags</li>
//                  <li>Photo</li>
//                  <li>Operation</li>
//              </ul>
         
//           {

//             setProducts.map((item,index)=>
//               <ul key={item}>
//                   <li>{index+1}</li>
//                   <li>{item.userid}</li>
//                   <li>{item.imgname}</li>
//                   <li>{item.tag}</li>
//                   <li><img src={item.photo} alt="dp"></img></li>
//                   <li><button onclick={deleteProduct}>Delete</button>
//                       <Link to={"/update/"+img._id}>Update</Link>
//                   </li>
//               </ul>

//              /* setProducts.map((item,index)=>
//              <ul key={item}>
//                  <li>{index+1}</li>
//                  <li>{item.imgname}</li>
//                  <li>{item.tag}</li>
//                  <li>{item.userid}</li>
//                  <li><button >Delete</button></li>
//              </ul> */
//              )

//           }
            
//          </div>

//      )
// }

//export default ProductList;
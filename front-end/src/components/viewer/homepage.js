import React, {Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
    
        state = {
            items: [],
        };

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("http://localhost:5000/getphotos")
            .then((res) => res.json())
            .then(items=> this.setState({
                    items }))
}

        

    render() {
        
        console.log(this.state.items)

        return (
        <div className = "product-list">
            <h1 className="h1tag"> Photo list </h1> 
                <ul>
                 <li>Index no.</li>
                 
                 <li>Photo name</li>
                 <li>Tags</li>
                 <li>Photo</li>
                 
             </ul>
    {
        this.state.items ? this.state.items.map((img,items) =>

        (<ul key={img._id}>
            <li>{items+1}</li>
            
            <li>{img.imgname}</li>
            <li>{img.tag}</li>
                 
        <li>{img ? 
        <img src="../categories/img.photo" alt={img.imgname}/>
        :
        <span>deleted</span>
        }</li>
        

        </ul>
        )):
        <h3>loading</h3>
        }
        </div>
    );
}
}



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

export default Homepage;
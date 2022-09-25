import React, { Component } from "react";

class ProductList extends Component {
    
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
            <h1> Photo list </h1>  
                <ul>
                 <li>Index no.</li>
                 <li>User id</li>
                 <li>Photo name</li>
                 <li>Tags</li>
                 <li>Photo</li>
                 <li>Operation</li>
             </ul>
    {
        this.state.items ? this.state.items.map((img,item) =>

        (<ul key={item}>
            <li>{item+1}</li>
            <li>{img.userid}</li>
            <li>{img.imgname}</li>
            <li>{img.tag}</li>
                 
        <li>{img ? 
        <img src={`./{img.photo}`}alt={img.imgname}/>
        :
        <span>deleted</span>
        }</li>
        <li><button>Delete</button></li>
        </ul>
        )):
        <h3>loading</h3>


             /* items.map((item,index)=>
             <ul key={item}>
                 <li>{index+1}</li>
                 <li>{item.userid}</li>
                 <li>{item.imgname}</li>
                 <li>{item.tag}</li>
                 <li><img src={item.photo} alt="dp"></img></li>
                 <li><button  >Delete</button></li>
             </ul>
             ) */



          }
            
        </div>
    );
}
}
export default ProductList;


// const ProductList =()=>{

//      const [products, setProducts] = useState('');
       

//      const getProducts = async () => {
//          let result = await fetch('http://localhost:5000/getphotos');
//          result = await result.json();
//          //setProducts(result);
//          console.warn(result);
//      }
    
//      useEffect(() => {
//         getProducts();

//     }, [])

//      return (
//         <div className = "product-list">
//             <h1> Photo list </h1>  
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
//                   <li><button >Delete</button></li>
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
import React from "react";

class ProductList extends React.Component {

    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("http://localhost:5000/getphotos")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }



    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
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
             items.map((item,index)=>
             <ul key={item}>
                 <li>{index+1}</li>
                 <li>{item.userid}</li>
                 <li>{item.imgname}</li>
                 <li>{item.tag}</li>
                 <li><img src={item.photo} alt="dp"></img></li>
                 <li><button  >Delete</button></li>
             </ul>
             )

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
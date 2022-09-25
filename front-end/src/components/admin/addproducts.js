import React from "react";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
    const navigate = useNavigate('');
    const [imgname, setName] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [path, setPath] = React.useState('');

    const addProduct = async () => {
        
        const userid = JSON.parse(localStorage.getItem("user"))._id;
        let result =await fetch("http://localhost:5000/addproduct", {
                method:'post',
                body:JSON.stringify({imgname, tag,userid}),
                headers:{
                    'Content-Type':'application/json'
                   },
        });
       result = await result.json()
       console.warn(imgname, tag, path);
       alert("image uploaded..")
       navigate('/')
       console.warn(result);
    }

    const handleInputChange = (e)=>{
        setPath(e.target.value)
    }

    return (
        <div className="divsgn">
            <h1 className="register">Upload Photos</h1>
            <input className="inputbox" type="text" placeholder="enter image name"
                value={imgname} onChange={(e) => setName(e.target.value)} />
            <input className="inputbox" type="text" placeholder="enter tag"
                value={tag} onChange={(e) => setTag(e.target.value)} />
          <form><input  type="file" value={path}  className="inputbox" name="upload_file" onChange={handleInputChange} ></input>
         </form>   <button onClick={addProduct} type="button" className="btnsn">Add photo</button>

        </div>
    )
}

export default AddProduct;
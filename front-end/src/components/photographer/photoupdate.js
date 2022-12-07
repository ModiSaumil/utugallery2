import React from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const UpdatePhoto = () => {
   
    const [imgname, setName] = React.useState('');
    const [tag, setTag] = React.useState('');
    const [photo, setPhoto] = React.useState('');
    const params = useParams();
    const navigate = useNavigate();

    
   
   

    useEffect(() => {
        getProductDetails();
        
    }, [])

    const getProductDetails = async ()=>{
        console.warn(params)
        let result = await fetch(`http://localhost:5000/update_photos/${params.id}`);
        result = await result.json();
        setName(result.imgname)
        setTag(result.tag)
       // setPhoto(result.photo)
        
    }

    const updatephoto = async ()=>{
        //console.warn(imgname, tag, photo)
        
        console.warn(imgname, tag)
        let result = fetch(`http://localhost:5000/update_photos/${params.id}`,{
            method:'Put',
            //body:JSON.stringify({imgname, tag, photo}),
            body:JSON.stringify({imgname, tag}),
            headers:{
                'Content-Type':"application/json"
            }
        });
        result = (await result).json()
        console.warn(result)
        navigate('/photolist')
    }

    return (

        <div className="divsgn">
            <h1 className="register">Update Photo</h1>
            <input className="inputbox" type="text" placeholder="enter image name"
                value={imgname} onChange={(e) => setName(e.target.value)} />
            <input className="inputbox" type="text" placeholder="enter tag"
                value={tag} onChange={(e) => setTag(e.target.value)}  />
          <form><input value={photo} type="file" className="inputbox" name="upload_file" onChange={(e) => setPhoto(e.target.value)} ></input>
         </form>   <button onClick={updatephoto} type="button" className="btnsn">update photo</button>

        </div>
    )
}

export default UpdatePhoto;
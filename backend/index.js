const express = require('express');
const cors = require("cors");
require('./db/config');
const User = require("./db/Users");
const app = express();
const Product = require("./db/Product");
app.use(express.json());
app.use(cors());
const Productmul = require("./db/Productmul");

//registration
app.post("/registration", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);

    if (result) {
        console.log("User registered!");
    } else {
        console.log("Error");
    }
})

//login
app.post("/login", async (req, resp, next) => {
    console.log(req.body)
    if (req.body.password && req.body.emailid) {

        let user = await User.findOne(req.body).select("-password");
        if (user) {
            resp.send(user)
        }
        else {
            resp.send({ result: 'no user found' })
        }
    }
    else {
        resp.send({ result: 'no user found' })
    }

})

const multer = require("multer");
const { parse } = require("path");
const Path = require("path");

//photo storage path
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "C:/Users/saumi/OneDrive/Desktop/utugallery/backend/uploads/categories");
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname);
    }
});

//photo filters
const fileFilter = (req, file, callback) => {
    const acceptableExt = [".png", ".jpg", ".jpeg",".PNG", ".JPG", ".JPEG"];
    if (!acceptableExt.includes(Path.extname(file.originalname))) {
        return callback(new Error("Only .png, .jpg and .jpeg format allowed !!"));
    }
    const filesize = parseInt(req.headers["content-length"]);
    if (filesize > 1048576) {
        return callback(new Error("File Size Big!"));
    }
    callback(null, true);
};

var upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    filesize: 1048576
});

//getallphotos
app.post("/addproduct", upload.single("photo"), async (req, resp, next) => {
    const path = req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";

    var model = {
        imgname: req.body.imgname,
        userid: req.body.userid,
        tag: req.body.tag,
        photo: path,
    }
    let product = new Product(model);
    let result = await product.save();
    resp.send(result);
})

//getallphotosbyuploadid
//getallphotos
app.get("/getphotos", async (req, resp, next) => {
    let products = await Product.find();
    if (products.length > 0) {
        resp.send(products)
    } else {
        resp.send({ result: "no products found" })
    }
})  

//getphotographer
app.get("/getPhotographers", async (req, resp, next) => {
    let user = await User.find(
        {
            "$or":[
                {
                    "role":"photog"
                }
            ]
        }
    );
    if (user.length > 0) {
        resp.send(user)
    } else {
        resp.send({ result: "no user found" })
    }
})

//getviewer
app.get("/getViewers", async (req, resp, next) => {
    let user = await User.find(
        {
            "$or":[
                {
                    "role":"viewer"
                }
            ]
        }
    );
    if (user.length > 0) {
        resp.send(user)
    } else {
        resp.send({ result: "no user found" })
    }
})

//getallusers
app.get("/getall", async (req, resp, next) => {
    let user = await User.find();
    if (user.length > 0) {
        resp.send(user)
    } else {
        resp.send({ result: "no user found" })
    }
})

//updateuser
app.patch("/update_users/:id",async (req, resp,next) => {
    try {
        let id = req.params.id;
        const update = req.body;
        const options = { new: true };
        const result = await User.findByIdAndUpdate(id,update,options);

        if (result) {
            resp.send(result);
        } else {
            resp.send('Not found');
            return;
        }
    } catch (error) {
        console.log(error.message);
    }
})

//updatephotofetch
app.get("/update_photos/:id",async (req, resp,next) => {
    let result = await Product.findOne({_id:req.params.id})
    if(result)
    {
        resp.send(result)
    }
    else
    {
        resp.send({result:"no photo found "})
    }  
})

//updatephoto
app.put("/update_photos/:id", async(req, resp ,next)=>{
    let result = await Product.updateOne(
        {_id:req.params.id},
        {
            $set : req.body
        }
    )
    resp.send(result)
})

//softdelete
app.patch("/delete_photos/:id",async (req, resp,next) => {
    try {
        let id = req.params.id;
        const update = req.body;
        const options = { new: true };
        const result = await User.findByIdAndUpdate(id,update,options);

        if (result) {
            resp.send(result);
        } else {
            resp.send('Not found');
            return;
        }
    } catch (error) {
        console.log(error.message);
    }
})

//harddelete
app.delete("/delete_photo/:id",async (req, resp, next)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    resp.send(result); 
})

//searchtagsw
app.get("/searchtags/:key", async (req, resp, next) => {
    let prod = await Product.find(
        {
            "$or":[
                {
                    "tag":{$regex:req.params.key}
                }
            ]
        }
    );
    if (prod.length > 0) {
        resp.send(prod)
    } else {
        resp.send({ result: "no prod found" })
    }
})

//insert multiple photos
// app.post("/addproductmultiple", upload.array("files"), async (req, resp, next) => {
//     const path = req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";

//     let filesArray =[];
//     req.files.array.foreach(element => {
//         const file = {
//             fileName:element.originalname,
//             filePath:element.path,
//         }
//         filesArray.push(file);
//     });
//     const productmul = new Productmul({
//             title:req.body.title,
//             files: filesArray
//     });
//     await productmul.save();
// })






app.listen(5000)

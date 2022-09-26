const express = require('express');
const cors = require("cors");
require('./db/config');
const User = require("./db/Users");
const app = express();
const Product = require("./db/Product");
app.use(express.json());
app.use(cors());
//const Productmul = require("./db/Productmul");

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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/categories");
    },
    filename: function (req, file, cb) {
        cb(null,file.originalname);
    }
});

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

app.get("/getphotos", async (req, resp, next) => {
    let products = await Product.find();
    if (products.length > 0) {
        resp.send(products)
    } else {
        resp.send({ result: "no products found" })
    }
})  

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

app.patch("/update_photos/:id",async (req, resp,next) => {
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

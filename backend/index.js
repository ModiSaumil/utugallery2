const express = require('express');
const cors = require("cors");
require('./db/config');
const User = require("./db/Users");
const app = express();
const Product = require("./db/Product");
app.use(express.json());
app.use(cors());

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
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const fileFilter = (req, file, callback) => {
    const acceptableExt = [".png", ".jpg", ".jpeg"];
    if (!acceptableExt.includes(Path.extname(file.originalname))) {
        return callback(new Error("Only .png, .jpg and .jpeg format allowed!"));
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

app.patch("/update/:id",async (req, resp,next) => {
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


app.listen(5000)

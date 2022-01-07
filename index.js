const express= require('express')
const multer=require('multer')
const path= require('path')
const Models= require('./model')

const app= express();
const mongoose= require('mongoose');
const model = require('./model');
var ObjectId = require('mongodb').ObjectID;
//var ObjectId = require('mongodb').ObjectID;
app.get('/',(req, res) => {
    res.send('We are at home')
 
 });
 
 app.use('/uploads', express.static(__dirname +'/uploads'));
 var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString()+file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })
  app.post('/upload', upload.single('myFile'), async(req, res, next) => {
      const file = req.file
      console.log(req.body);
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      Models.updateOne({ "phone": req.body.phone }, { $set: { "aadhar": file.path } }, (err, result) => {
          if (err) {
              console.log(err)
          } else {
              console.log(result)
          }
      }); 
      
    //   const imagepost= new model({
    //     aadhar: file.path
    //   })
    //   const savedimage= await imagepost.save()
    //   res.json(savedimage)
    
  })

app.get('/image', async (req, res) => {
  const image = await Models.find()
  res.json(image)
   
});
//  var upload10 = multer({ storage: storage })
  app.post('/upload10', upload.single('myFile'), async(req, res, next) => {
      const file = req.file
      console.log(req.body);
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      Models.updateOne({ "_id": ObjectId(req.body.phone) }, { $set: { "aadhar": file.path } }, (err, result) => {
          if (err) {
              res.json(err)
          } else {
              res.json(result)
          }
      }); 
      
    
    
  })
  app.post('/upload1', upload.single('myFile'), async(req, res, next) => {
      const file = req.file
      console.log(req.body);
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      Models.updateOne({ "phone": req.body.phone }, { $set: { "aadharback": file.path } }, (err, result) => {
          if (err) {
              console.log(err)
          } else {
              console.log(result)
          }
      }); 
      
    //   const imagepost= new model({
    //     aadhar: file.path
    //   })
    //   const savedimage= await imagepost.save()
    //   res.json(savedimage)
    
  })


  app.post('/upload2', upload.single('myFile'), async(req, res, next) => {
      const file = req.file
      console.log(req.body);
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      Models.updateOne({ "phone": req.body.phone }, { $set: { "pan": file.path } }, (err, result) => {
          if (err) {
              console.log(err)
          } else {
              console.log(result)
          }
      }); 
      
  })
  app.post('/upload11', upload.single('myFile'), async(req, res, next) => {
      const file = req.file
      console.log(req.body);
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      Models.updateOne({ "_id": ObjectId(req.body.phone)}, { $set: { "aadharback": file.path } }, (err, result) => {
           if (err) {
              res.json(err)
          } else {
              res.json(result)
          }
      }); 
      
    //   const imagepost= new model({
    //     aadhar: file.path
    //   })
    //   const savedimage= await imagepost.save()
    //   res.json(savedimage)
    
  })


  app.post('/upload12', upload.single('myFile'), async(req, res, next) => {
      const file = req.file
      console.log(req.body);
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      Models.updateOne({ "_id": ObjectId(req.body.phone) }, { $set: { "pan": file.path } }, (err, result) => {
           if (err) {
              res.json(err)
          } else {
              res.json(result)
          }
      }); 
      
  })
  app.post('/upload3', upload.single('myFile'), async(req, res, next) => {
      const file = req.file
      console.log(req.body);
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      Models.updateOne({ "phone": req.body.phone }, { $set: { "rent": file.path } }, (err, result) => {
          if (err) {
              console.log(err)
          } else {
              console.log(result)
          }
      }); 
      
  })
  app.post('/upload4', upload.single('myFile'), async(req, res, next) => {
      const file = req.file
      console.log(req.body);
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      Models.updateOne({ "phone": req.body.phone }, { $set: { "bs": file.path } }, (err, result) => {
          if (err) {
              console.log(err)
          } else {
              console.log(result)
          }
      }); 
      
  })
  app.post('/upload5', upload.single('myFile'), async(req, res, next) => {
      const file = req.file
      console.log(req.body);
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      Models.updateOne({ "phone": req.body.phone }, { $set: { "sp": file.path } }, (err, result) => {
          if (err) {
              console.log(err)
          } else {
              console.log(result)
          }
      }); 
      
  })

  app.post('/upload6', upload.single('myFile'), async(req, res, next) => {
      const file = req.file
      console.log('gfghfghfghfhgfhgfhgfhgfhgfhgfghfghfhgfghfhgfhgfghf');
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      Models.updateOne({ "phone": req.body.phone }, { $set: { "photo": file.path } }, (err, result) => {
          if (err) {
              console.log(err)
          } else {
              console.log(result)
          }
      }); 
      
  })

  app.post('/upload7', upload.single('myFile'), async(req, res, next) => {
      const file = req.file
      console.log('gfghfghfghfhgfhgfhgfhgfhgfhgfghfghfhgfghfhgfhgfghf');
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      Models.updateOne({ "phone": req.body.phone }, { $set: { "officeaddr": file.path } }, (err, result) => {
          if (err) {
              console.log(err)
          } else {
              console.log(result)
          }
      }); 
      
  })
  app.post('/upload8', upload.single('myFile'), async(req, res, next) => {
      const file = req.file
      console.log('gfghfghfghfhgfhgfhgfhgfhgfhgfghfghfhgfghfhgfhgfghf');
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      Models.updateOne({ "phone": req.body.phone }, { $set: { "business": file.path } }, (err, result) => {
          if (err) {
              console.log(err)
          } else {
              console.log(result)
          }
      }); 
      
  })
  app.post('/upload9', upload.single('myFile'), async(req, res, next) => {
      const file = req.file
    console.log(req.body.phone);
   // var myId = JSON.parse(req.body.phone);
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      Models.updateOne({ "_id": ObjectId(req.body.phone) }, { $set: { "refimg": file.path } }, (err, result) => {
          if (err) {
              res.json(err)
          } else {
              res.json(result)
          }
      }); 
      
  })


  app.get('/image2',async(req, res)=>{
   const image = await Models.find()
   res.json(image)
   
  })

mongoose.connect("mongodb://pura:123456@34.93.244.100/pura?authSource=pura",{ useNewUrlParser: true },()=>{
  console.log('db connnected')
})
app.listen(3001);
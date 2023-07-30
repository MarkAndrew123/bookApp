const express = require('express') ;
const express = require('express-file');
const fileUpload = require('express-fileupload');

 const app = express()

 app.use(fileUpload());

 app.post('/upload', (req, res) => {
    if(req.files === null) {
        return res.status(400).json({ msg: 'NO file Uploaded'});
    
    }
    const file = req.files.file;

    file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
        if(err) { 
              console.error(err);
              return res.status(500).send(err)
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`})
    })
 })

 app.listen(5000, ()=> console.log('Server Started ....')  )
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes');


const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

//
mongoose.connect('mongodb+srv://<username>:<password>@mycluster.tqcwmv7.mongodb.net/fkreview?retryWrites=true&w=majority', { useNewUrlParser: true })
.then(( ) => {
    const app = express();
    app.use(bodyParser.json()); // <--- Here
    app.use(cors(corsOptions))  
    app.use('/api', router)

    app.listen(8001, () => console.log("Server has started"))
})


const mongoose = require("mongoose");


const options = {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

  
mongoose.connect("mongodb://localhost:27017/Todo_DB", options).then(
    ()=>{console.log("Todo Db connected");},
    (err)=>{console.log(err);}
)



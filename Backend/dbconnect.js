const mongoose= require ('mongoose');
const mongoURI="mongodb+srv://Asutosh:Asutosh123@cluster0.qnkw4.mongodb.net/test"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected");
    })
}

module.exports = connectToMongo;
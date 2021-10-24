const mongoose= require ('mongoose');
const mongoURI="ask me for url"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected");
    })
}

module.exports = connectToMongo;

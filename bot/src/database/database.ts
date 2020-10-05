import { connect } from "mongoose";

connect(process.env.MONGO_URI, { 
    useFindAndModify: false, 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, (err) => {
    if (err) console.log(err);
    else console.log("Successfully connect the Discord Bot to the MongoDB Database.");
});
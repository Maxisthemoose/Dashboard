import { connect } from "mongoose";

connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
}, (err) => {
    if (err) console.error(err);
    else console.log("Successfully connected to the MongoDB Database");
});
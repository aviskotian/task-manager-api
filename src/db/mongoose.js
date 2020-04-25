
const mongoose = require('mongoose');

const usersDB = mongoose.createConnection(process.env.USERDB_URL, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true ,
    useFindAndModify: false
})

const conn2 = mongoose.createConnection(process.env.CONN2_URL, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true ,
    useFindAndModify: false
})

// const task = new Tasks({
//     description: ' wedwdwedwedw     efwefwef'
// })

// task.save().then((result)=>{
//     console.log(task);
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

module.exports = {
    usersDB: usersDB,
    conn2: conn2
}
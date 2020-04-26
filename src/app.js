const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app













// const multer =  require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         //if(!file.originalname.endsWith('.pdf')){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Pleas upload  word document'))
//         }
//         cb(undefined, true)
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cb(undefined, false)

//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send();
// },(error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })





// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () => {
//     // const task = await Task.findById('5e7a2e75ba6ea34e7bc34946')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)
//     try{
//         const user = await User.findById('5e7a2e68ba6ea34e7bc34944')
//         await user.populate('tasks').execPopulate()
//         console.log(user.tasks)
//     }catch(e){
//         console.log(e)
//     }
    

// }

// main()
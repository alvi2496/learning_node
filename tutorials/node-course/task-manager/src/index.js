const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user_router');
const taskRouter = require('./routers/task_router');
const responseBuilder = require('./utils/response_builder');

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled!');
//     } else {
//         next();
//     }
// });

// app.use((req, res, next) => {
//     res.status(503).send({status: responseBuilder(503), additionalMessage: 'The site is under maintanance!'});
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => { console.log('Listening on ' + port); });


// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const myFunction = async () => {
//     const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn: '0 seconds'});
//     console.log(token);

//     const data = jwt.verify(token, 'thisismynewcourse');
//     console.log(data);
// }

// myFunction()
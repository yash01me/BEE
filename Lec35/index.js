const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const {Queue} = require('bullmq');
let codeQueue = new Queue('code-queue',{
    connection:{
        host:'localhost',
        port:6379,
    }
});
    

app.post("/api/submission", async function (req, res) {
    let {qId, code, language} = req.body;
    let result = await codeQueue.add('submission', { qId, code, language });
    console.log(result);

    //offload the job to message queue, so that a worker can do the task
    res.json({
        message:"client server console"

    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
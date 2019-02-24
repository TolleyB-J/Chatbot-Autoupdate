const express = require('express');
const cmd = require('node-cmd');
const app = express();
const port = 3001;

app.get('/updateChatBot', (req, res) => {
    cmd.get('cd /home/ubuntu/ChatBot && git pull && pm2 restart ChatBot', function(err, data, stderr){
        console.log(data)
    })
    res.send('ChatBot Updating! (Use POST next time)')});
app.post('/updateChatBot', (req, res) => {
    cmd.get('cd /home/ubuntu/ChatBot && git pull && pm2 restart ChatBot', function(err, data, stderr){
        console.log(data)
    })
    res.send('ChatBot Updating!')});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
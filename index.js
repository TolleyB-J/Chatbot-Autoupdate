const express = require('express');
const cmd = require('node-cmd');
const app = express();
const port = 3001;
const updateChatBotCMD = 'cd /home/ubuntu/ChatBot && git pull && npm install && pm2 restart ChatBot'

app.get('/updateChatBot', (req, res) => {
    cmd.get(updateChatBotCMD, function(err, data, stderr){
        console.log(data)
    })
    res.send('ChatBot Updating! (Use POST next time)')});
app.post('/updateChatBot', (req, res) => {
    cmd.get(updateChatBotCMD, function(err, data, stderr){
        console.log(data)
    })
    res.send('ChatBot Updating!')});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
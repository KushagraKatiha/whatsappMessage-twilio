// const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.ACC_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


const sendMsg = async () => {
await client.messages
            .create({
                body: 'Your appointment is coming up on July 21 at 3PM',
                from: 'whatsapp:+14155238886',
                to: 'whatsapp:+919621412161'
            })
            .then(message => console.log(message))
            .catch(error => console.log(error));
}

sendMsg()

    // const button = document.querySelector('button');

    // button.addEventListener('click', sendMsg);

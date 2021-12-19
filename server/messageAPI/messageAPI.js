
const accountSid = 'AC953ca9af5ae7bc703727c0c5a9f92baf';
const authToken = '0a1956dfef0dbddc2864cf524171b881';
const client = require('twilio')(accountSid, authToken);

const SendMessage = client.messages
    .create({
        body: 'test',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+79532084008'
    })
    .then(message => console.log(message.sid))
    .done();

module.exports = {
    SendMessage
}
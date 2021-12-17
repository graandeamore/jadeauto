const client = require('twilio')();

client.messages.create({
    from: 'whatsapp:+79532084008',
    body: 'Ahoy world!',
    to: 'whatsapp:+79532084008'
}).then(message => console.log(message.sid));
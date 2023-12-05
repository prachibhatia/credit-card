const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 3000;

const accountSid = 'AC02eabc103504df0242797eb223008777';
const authToken = '5c1ebbb61b6fb8fb9f4eb4b275960211';
const client = twilio(accountSid, authToken);

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-sms', (req, res) => {

  client.messages.create({
    body: 'Do you want to accept or decline the payment - XXX',
    to: '+918595636099',
    from: '+16466817063'
  })
  .then(() => {
    res.send('SMS sent successfully!');
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error sending SMS');
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
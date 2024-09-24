
const twilio = require('twilio');

const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const client = new twilio(accountSid, authToken);

app.post('/send-notification', (req, res) => {
    const { mobileNumber, upiId } = req.body;

    client.messages
        .create({
            body: `Notification: Please make your payment using UPI ID: ${upiId}`,
            to: mobileNumber,
            from: 'YOUR_TWILIO_PHONE_NUMBER',
        })
        .then((message) => {
            console.log(message.sid);
            res.send('Notification sent successfully.');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error sending notification.');
        });
});


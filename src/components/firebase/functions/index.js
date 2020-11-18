const functions = require('firebase-functions');
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
admin.initializeApp()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: true, 
    auth: {
        user: 'mennahjafar@gmail.com',
        pass: 'skyfallM'
    }
});

exports.sendEmail = functions.firestore
    .document('/orders/{order_id}')
    .onCreate((snap, context) => {
        console.log("We have a notification to send to");
        const mailOptions = {
            from: `mennahjafar@gmail.com`,
            to: snap.data().email,
            // to: `mennahjafar@hotmail.com`,
            subject: 'contact form message',
            html: `<h1>Order Confirmation</h1>
                <p>
                    <b>Email: </b>just a text<br>
                </p>`
        };


        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
    });


// exports.sendMail = functions.https.onRequest((req, res) => {
//     cors(req, res, () => {
      
//         // getting dest email by query string
//         const dest = req.query.dest;

//         const mailOptions = {
//             from: `mennahjafar@gmail.com`, // Something like: Jane Doe <janedoe@gmail.com>
//             from: `mennahjafar@hotmail.com`,
//             subject: 'I\'M A PICKLE!!!', // email subject
//             html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
//                 <br />
//             ` // email content in HTML
//         };
  
//         // returning result
//         return transporter.sendMail(mailOptions, (erro, info) => {
//             if(erro){
//                 return res.send(erro.toString());
//             }
//             return res.send('Sended');
//         });
//     });    
// });

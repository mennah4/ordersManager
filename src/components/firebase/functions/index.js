const functions = require('firebase-functions');
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');

admin.initializeApp()


//google account credentials used to send email
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'mennahjafar@gmail.com',
        pass: '*********'
    }
});


exports.sendEmail = functions.firestore //function to send an email when the order is created 
    .document('orders/{orderId}')
    .onCreate((snap, context) => {

        const mailOptions = {
            from: `mennahjafar@gmail.com`,
            to: snap.data().email,
            // to: `mennahjafar@hotmail.com`,
            subject: 'contact form message',
            html: `<h1>Order Confirmation</h1>
                <p>
                    <b>Than you for ordering through Mashkor, we have recieved your order and will update you with the status of your order soon.<br>
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


    exports.sendOrderConfirmationEmail = functions.firestore //function to send an email when the order status has changed depending on the status
    .document('orders/{orderId}')
    .onUpdate((change, context) => {
        console.log("We have a notification to send to");
        const order = change.after.data();
        if (order.orderStatus === "accepted") {
            const acceptMailOptions = {
                from: `mennahjafar@gmail.com`,
                to: order.email,
                // to: `mennahjafar@hotmail.com`,
                subject: 'Order Status Updated',
                html: `<h1>Order Accepted</h1>
                    <p>
                        <b>Order Status:</b>Thank you for contacting with Mashkor, we'd like to inform you that we have accepted your order.<br>
                    </p>`
            };
            return transporter.sendMail(acceptMailOptions, (error, data) => {
                if (error) {
                    console.log(error)
                    return
                }
                console.log("Sent!")
            });
        } else if (order.orderStatus === "rejected") {
            const rejectMailOptions = {
                from: `mennahjafar@gmail.com`,
                to: order.email,
                // to: `mennahjafar@hotmail.com`,
                subject: 'Order Status Updated',
                html: `<h1>Order Rejected</h1>
                        <p>
                            <b>Order Status:</b>Thank you for contacting with Mashkor, we'd like to inform you that sadly, we cannnot go further with your order.<br>
                        </p>`
            };
            return transporter.sendMail(rejectMailOptions, (error, data) => {
                if (error) {
                    console.log(error)
                    return
                }
                console.log("Sent!")
            });
        }
    });

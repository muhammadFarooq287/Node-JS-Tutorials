var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(
    {
        service : 'gmail',
        auth: {
            user : 'shazifeekhalid3@gmail.com',
            pass: 'vwggwmbifijdlils'
        }
    }
);

var mailOptions = {
    from : 'shazifeekhalid3@gmail.com',
    to : 'shazifeekhalid3@gmail.com',
    subject : 'Node JS mail Application',
    text : 'Amazing Node JS'
} ;

transporter.sendMail(mailOptions,function(err,info){
    if (err){
        console.log(err);
    } else {
        console.log('Email Sent' + info.response);
    }
});
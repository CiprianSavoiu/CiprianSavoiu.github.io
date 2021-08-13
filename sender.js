function sendmail() {
        var clientMessage = {
            to:"office@llg-media.co.uk",
            from:document.getElementById("inputEmail").value,
            subject: document.getElementById("inputSubject").value,
            text: document.getElementById("inputName").value + " " +
            document.getElementById("inputPhone").value + " " +
            document.getElementById("inputMessage").value        
        }
        const sgMail = require('@sendgrid/mail');
        // const sgMail = require(['@sendgrid/mail']);
        sgMail.setApiKey(process.env.API_KEY_SG);
        sgMail.send(clientMessage);
    };
authenticator = require('otplib').authenticator;
secrets = require('./secrets')


if (location.pathname == "/login.srf") {
    setInterval(() => {
        if (document.getElementById('idTxtBx_SAOTCC_OTC')) {
            document.getElementById('idSubmit_SAOTCC_Continue').click();
            document.getElementById('idTxtBx_SAOTCC_OTC').value = authenticator.generate(secrets.otpSecret);
            document.getElementById('idTxtBx_SAOTCC_OTC').blur()
        }
    }, 50);
}

if (location.pathname == "/common/SAS/ProcessAuth") {
    setInterval(() => {
        if (document.getElementById(' progressBar') == null) {
            document.getElementById('idSIButton9').click();
        }
    }, 50);
}

if (location.pathname == "/common/oauth2/v2.0/authorize") {
    setInterval(() => { document.getElementsByClassName('table')[0].click() }, 50);
}

if (location.pathname == "/adfs/ls/") {
    window.addEventListener('load', () => {
        document.getElementById('userNameInput').value = secrets.username;
        document.getElementById('passwordInput').value = secrets.password;
        Login.submitLoginRequest();
    }, false);
}
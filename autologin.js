authenticator = require('otplib').authenticator;
secrets = require('./secrets')

if (location.pathname == "/login.srf" || location.pathname == "/common/reprocess" || location.pathname.includes('saml2') || location.pathname.endsWith("login")) {
    
    setInterval(() => {
        if(document.getElementById('signInAnotherWay')) {
            document.getElementById('signInAnotherWay').click();
        }
    }, 50);

    setInterval(() => {
        document.querySelectorAll('div[data-value="PhoneAppOTP"]')[0].click()
    }, 50);

    setInterval(() => {
        if (document.getElementById('idTxtBx_SAOTCC_OTC')) {
            document.getElementById('idSubmit_SAOTCC_Continue').click();
            document.getElementById('idTxtBx_SAOTCC_OTC').value = authenticator.generate(secrets.otpSecret);
            document.getElementById('idTxtBx_SAOTCC_OTC').blur()
        }
    }, 50);

    setInterval(() => {
        if (document.getElementsByName('passwd')) {
          document.getElementById('idSIButton9').click();
          document.getElementsByName('passwd')[0].value = secrets.password;
          document.getElementsByName('passwd')[0].blur();
        }
      }, 50);

    setInterval(() => {
        document.getElementById('tilesHolder').querySelector('div[data-test-id="' + secrets.username + '"]').click();
    }, 50);
}

if (location.pathname == "/common/SAS/ProcessAuth") {
    setInterval(() => {
        if (document.getElementById('progressBar') == null) {
            document.getElementById('idSIButton9').click();
        }
    }, 50);
}

if (location.pathname == "/common/oauth2/v2.0/authorize") {
    setInterval(() => { document.getElementsByClassName('table')[0].click() }, 50);
}

if (location.pathname == "/adfs/ls/") {
    window.addEventListener('load', () => {
        document.getElementById('userNameInput').style.type = "hidden"
        document.getElementById('userNameInput').value = secrets.username;
        document.getElementById('passwordInput').value = secrets.password;
        Login.submitLoginRequest();
    }, false);
}

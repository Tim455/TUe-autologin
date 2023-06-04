This userscript is provided as-is and without any warranty. It is not endorsed or affiliated with the Technical Universiteit Eindhoven. The script stores your username and OTP secret in plain text on your computer, which is a significant security risk. 
Using this script could compromise your personal data and the data of others, especially if you have access to someone else's data. Please do not use this script.

# TU/e autologin
This script automatically logs you into the website of the TU/e without the need of a phone to authenticate or the need to press _any_ button. See the video for a demo. 

Please note project is not affiliated with or endorsed by the Technical Universiteit Eindhoven in any way shape or form. At the moment the script is rather insecure and your username and OTP secret are stored in plain text on your computer.

<img src="/assets/demo.gif" width="500"/>

## Installation instructions
To build the usescript run:
1. Clone the repo with 
```git clone https://github.com/Tim455/TUe-autologin.git && cd TUe-autologin```
2. Rename secrets.js.example to secrets.js
```mv secrets.js.example secrets.js```
3. Edit secrets.js to contain your username, password and OTP secret
4. Install the dependencies `npm install`
5. Build the userscript with 
```(cat header.js; npx browserify autologin.js) > out.js```
6. Copy and paste the out.js file into a browser extension like Tampermonkey or Violentmonkey. Please note that I have only tested this script on Violentmonkey.

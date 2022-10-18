# TU/e autologin
This script automatically logs you into the website of the TU/e without the need of a phone to authenticate or the need to press _any_ button. See the video for a demo. 


Please note project is not affiliated with or endorsed by the Technical Universiteit Eindhoven in any way share or form. At the moment the script is rather insecure and your username and OTP secret are stored in plain text on your computer.

## Instructions
First you have to have node.js installed. This can be installed on Linux by first installing nvm with:
```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash``` 
Next actually download node.js with `nvm use 16`. 
To build the usescript run:
1. Clone the repo with 
```git clone git@github.com:Tim455/TUe-autologin.git && cd TUe-autologin```
2. Rename secrets.js.example to secrets.js 
```mv secrets.js.example secrets.js```
3. Enter your own login credentials and your own OTP secret you got from https://mysignins.microsoft.com/security-info.
```nano secrets.js``` 
4. Install the dependencies `npm install`
6. Build the userscript with 
```(cat header.js; npx browserify autologin.js) > out.js```
7. Copy paste the out.js file into a extension like tampermonkey or violentmonkey. I have tested violentmonkey. 
8. profit :)


## Demo
![A demo of the autologin script](/assets/demo.gif)
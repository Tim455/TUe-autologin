# NO NOT USE THIS CODE! THIS IS INSECURE. NO NOT USE THIS CODE!
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

This code stores your OTP token in clear text, making almost entirely useless. 

# TU/e autologin

*THIS USERSCRIPT DOES NOT STORE YOUR PASSWORD AND OTP SECRET SECURELY*! 

*Please do not* use this userscript especially if you have access to somebody elses data. You are not the person that should decide if it is worth the risk. 

This script automatically logs you into the website of the TU/e without the need of a phone to authenticate or the need to press _any_ button. See the video for a demo. 

Please note project is not affiliated with or endorsed by the Technical Universiteit Eindhoven in any way shape or form. At the moment the script is rather insecure and your username and OTP secret are stored in plain text on your computer.

## Instructions
To build the usescript run:
1. Clone the repo with 
```git clone git@github.com:Tim455/TUe-autologin.git && cd TUe-autologin```
2. Rename secrets.js.example to secrets.js 
```mv secrets.js.example secrets.js```
3. Enter your own login credentials and your own OTP secret. You are the sole person responsible for keeping this secret and password secure, by entering it into the script you know that it is less secure and decide to take the risk anyways. I do NOT take responsibility for this. 
4. Install the dependencies `npm install`
6. Build the userscript with 
```(cat header.js; npx browserify autologin.js) > out.js```
7. Copy paste the out.js file into a extension like tampermonkey or violentmonkey. I have tested violentmonkey. 
8. profit :)


## Demo
![A demo of the autologin script](/assets/demo.gif)
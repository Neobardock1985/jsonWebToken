import './App.css';

var CryptoJS = require("crypto-js");


function encryter(obj) {

  var jsonStringify = JSON.stringify(obj);

  // Encrypt
  var ciphertext = CryptoJS.AES.encrypt(jsonStringify, 'secret key 123').toString();
  console.log("ciphertext", ciphertext);

  // Decrypt 
  var bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  console.log("originalText", originalText); // 'my message'

  if (originalText === "") {
    originalText = "Decrypt error"
  }

  return originalText;

}

function App() {
  return (
    <div className="App">
      <p>
        {encryter({ test: 1, test2: 2 })}
      </p>
    </div>
  );
}

export default App;

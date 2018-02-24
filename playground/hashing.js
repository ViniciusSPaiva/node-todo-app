const {SHA256} = require('crypto-js');
const jwf = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';
var hashedPassword = '$2a$10$8r5ZXZzcyh8ExKHiL9lxg.omu91HpxZEmX0FH96TeW7g2WmUzotfdfghfghdfghfghghfhfgdhfgWpS';

bcrypt.genSalt(10, (err, salt) => {
  console.log('salt', salt);
  bcrypt.hash(hashedPassword, salt, (err, hash) => {
    console.log('hash', hash);
  });
});


// bcrypt.compare(password, hashedPassword, (err, res) => {
//   console.log('res', res);
// });



// var data = {
//   id: 10
// };
//
// var token = jwf.sign(data, '123abc');
// console.log('Token', token);
//
// var decoded = jwf.verify(token, '123abc');
// console.log('Decoded', decoded);
//
// var motivo = data.teste || data.id;
// console.log(`TESTE ${data.teste || data.id}`);

// var message = 'Hello there!';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
//
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(data)).toString();
//
// var resultHash = SHA256(JSON.stringify(data) + 'somesecret').toString();
// if(resultHash === token.hash){
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }

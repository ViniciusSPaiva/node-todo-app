const {SHA256} = require('crypto-js');
const jwf = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwf.sign(data, '123abc');
console.log('Token', token);

var decoded = jwf.verify(token, '123abc');
console.log('Decoded', decoded);

var motivo = data.teste || data.id;
console.log(`TESTE ${data.teste || data.id}`);

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

/*
{

   db= 'mongodb://localhost:27017/teste-aula';
}
*/
const config = {
   db: 'mongodb://localhost:27017/playersTest',
   secret: 'supersecret',
   expiresPassword: 86400 // expires in 24hours
}


module.exports = config;
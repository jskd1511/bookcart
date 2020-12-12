const express = require('express')
const app = express()
const port = 4000
app.use(function(req,res,next) {
   res.setHeader('Access-Control-Allow-Origin','*');
   res.setHeader('Access-Control-Allow-Methods','POST');
   res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
   res.setHeader('Access-Control-Allow-Credentials',true);
   next();
}); 

const data={
   name:'jasmeet',
   img:'https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg',
   occup:'developer',
   age:20
}
app.get('/',(req,res)=>{
   res.send(data)
})
app.get('/home',(req,res)=>{
   res.send('this is home page')
})
app.listen(port,()=>{
   console.log('port is running on prot =>'+port)
})

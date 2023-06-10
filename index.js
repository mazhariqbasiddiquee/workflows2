// index.js

//  import the crypto module

var crypto = require('crypto');
var process=require(`process`)



//  get a commands using process.argv


// complete the  function



switch (process.argv[2]) {

  case "add" :
   
    let data=Number(process.argv[3])+Number(process.argv[4])
     console.log(data)
    break;
    case "sub" :
   
    let data1=Number(process.argv[3])-Number(process.argv[4])
     console.log(data1)
    break;
    case "divide" :
   
    let data2=Number(process.argv[3])/Number(process.argv[4])
     console.log(data2)
    break;
    case "mult" :
   
    let data3=Number(process.argv[3])*Number(process.argv[4])
     console.log(data3)
    break;


  
  default:
    console.log("Invalid operation");
}


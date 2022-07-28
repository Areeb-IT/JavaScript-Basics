/*let day=4
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    cas(e 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
}
console.log(day);  */
function q5(arr=[]){


for (const a of arr ){
  let flag=true
  for(i=2;i<=parseInt(a/2);i++){
    for(a=[];a<=100;a++){
      
    }
    
      if(a%i==0){
        flag=false
      }
      }
      if(flag){console.log(a+" is prime");}
      else{console.log(a+" is not prime");}
      /* else{
          message ="not prime"
      } */
  }
}

q5([9,8,7,5,67,71,11,13,17])
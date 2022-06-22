//let time=10
//if(time < 5){
//    message= "good morning"
//}else if(time > 12 ){
//    message= "have a good day"
//}else{
//    message= "good afternoon"
//}
//console.log(message);
let day=4
switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
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
console.log(day);
//to sort alphabit array we use .sort() for assending order
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.sort();
//console.log(fruits);
//to sort alphabit array we use .sort() and .reverse() both for decending
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.sort();
//fruits.reverse()
//console.log(fruits);
//for numaric
//let points = ["d","a",9,56];
//console.log(points);
//points.sort()
//console.log(points);
// let text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// console.log(text);
// 

//const scores=[10,5,20,20,4,5,2,25,1]
//  var min = scores[0]
//  var max= scores[0]
//  var mincount=0
//  var maxcount=0
//  for(let i=0;i<scores.length;i++){
//     if(scores[i]<min){
//         min=scores[i]
//         mincount++
//     }
//     else if(scores[i]>max){
//         max=scores[i]
//         maxcount++
//     }
   
    
//  }
//  return [mincount,maxcount]
//const arr=[1, 2 ,3 ,4, 10 ,11]
// sum=0
// for(let i of arr){
//     sum+=i
// }
// console.log(sum);


//const a= [1, 2, 3]
//const b = [3, 2, 1]
// var c=0
// var d=0
// for(let i=0;i<a.length;i++){
//     if(a[i]>b[i]){
//         c++
//     }
//     else if (a[i]<b[i]){
//         d++
//     }
// }
// console.log(c);
// console.log(d);

// const arr=[[11, 2, 4], [ 4, 5, 6],[10, 8, -12]]
// const diagonalSum = arr => {
//     let sum = 1;
//     for(let i = 0; i < arr.length; i++){
//        for(let j = 0; j < arr[i].length; j++){
//           if(i === j){
//              sum += arr[i][j];
//           };
//        };
//     };
//     return sum;
//  };
//  console.log(diagonalSum(arr));
//const arr=[1,2,3,4,5]
//const arr1=[]
//var a=2
//let b=arr.shift()
//let c=arr1.push(b)
// for(let i=0;i<a;i++){
    // function rotLeft(a, d) {
    //     var arr = [];
      
    //       for (var i = 1; i <= a; i++){ 
    //         arr.push(i)
    //       };
    //       for (var j = 1; j <= d; j++){
    //           arr.shift(arr1.push(j))
    //       }
    //       console.log(arr.toString(arr1));
//
//}
//console.log(arr1);

// let marks=65
// function getgrade(marks) {
//     if(marks>=90){
//         comment="your grade is A+"
//     }
//     else if(marks>=80){
//         comment = "your garde is A"
//     }
//     else if(marks>=70){
//         comment = "your grade is B"
//     }
//     else {
//         comment="you are fail"
//     }
// return comment
// }

// console.log(getgrade(100));

// function getpass(std=[]){
// pass=[] 
// for(let i=0;i<std.length;i++) {
//     per=std[i]
//     if(per.marks>=70){
//         pass.push(per)
//     }
    
// }  
// return pass
// }
// console.log(getpass([{name:"tayyab",marks:67},{name:"areeb",marks:87},{name:"jami",marks:70}]));
// function getminmax(arr=[]){
//     max=arr[0]
//     min=arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(max<arr[i]){
//             max=arr[i]
//         }
//         else if(min>arr[i]){
//             min=arr[i]
//         }
//     }
//     return [min,max]
// }
// console.log(getminmax([34,67,3,7,8,23]));
function table(n,l=10){
    for(let i=1;i<=l;i++){
     console.log(n +"*" +i+"="+ n*i);
    }

}
table(8,13)
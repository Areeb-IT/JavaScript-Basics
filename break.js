// const arr= [1,2,3,4,5,6,7,8,9]
// for (const x of arr) {
//     if(x==5){continue}
//     console.log(x);
// }
// const a=[{firstname:"areeb",lastname:"gondal"},{firstname:"hamza",lastname:"babar"}]
// for (const x of a )
// {
//     if (x.firstname=="hmza"){
//         console.log(x.lastname);
//     }
// }
 const arr=[12,3,43,56,72,8,2,6]
 //const even=[]
// const odd=[]
// for (const a of arr) {
//     if (a%2==0){
//     even.push(a)
//     }
//     else{
//         odd.push(a)
//     }
// }
// console.log(odd,even);
for (const a of arr ){
    for(i=2;i<=a/2;i++){
        if(a%i==0){
            message =a+" is  not prime"
            console.log(message);
            break
        }
        else{
            //message ="not prime"
        }
    }
}

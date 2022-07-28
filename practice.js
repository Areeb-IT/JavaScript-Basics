/* function q5(){
    console.log("N\t\tN*10\t\tN*100\t\tN*1000");
    for(let i=1;i<=5;i++){
        console.log(i+"\t\t"+i*10+"\t\t"+i*100+"\t\t"+i*1000);
    }
}
q5() */
/* function q4(str){
    reverse=""
    for (let i=str.length-1;i>=0;i--){
        reverse=reverse+str[i]
    }
    return str==reverse
}
console.log(q4("tayyab")); */
/* function q3(a=[],target){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length;j++){
            if(target==a[i]+a[j]){
                return true
            }
        }
    }
    return false
}
console.log(q3([21,45,65,76,4,52,5],11)); */

/* function q2(a=[],target){
    for(let i=0;i<a.length;i++){
        if(target==a[i]){
            return i
        }
    }
    return -1
}
console.log(q2([21,45,65,76,4,52,5],21)); */
/* function q1(n){
    let fact=1
    for(let i=n;i>0;i--){
        fact=fact*i
        }
        return fact
}
console.log(q1(4)); */
// function q1(){
//     res="";
//     for( i=0;i<=14;i++){
//         n=i*i
//         res+=n+"  "
//     }
// console.log(res);
// }
// q1()
/* function q2(){
    for(i=1;i<=10;i++){
        n=i**3
        console.log(i+"    "+n);
    }
    
}
q2() */
/* function q3(n){
    let sum=0
    for(i=n;i>=1;i--){
      sum+=i
    }
    console.log(sum);
}
q3(7) */
/* function q4(start=0,end=500){
    for(let i=start;i<=end;i++){
        let sum=0
        for(let j=1;j<=parseInt(i/2);j++){
            if(i%j==0){
                sum+=j
            }
        }
        if(sum==i){
            console.log(i);
        }
    }
}
q4(1,10000) */
// function q5(arr=[]){
//     for(i=0;i<=arr,length;i++){
//         if(a%i==0){
//           message = "rhis number is prime"+a
//           console.log(message);
//         }
//         else{
//             message="not prime"
//         }
//     }
// }
// q5([9])
// map, filter, arrow fns
//1.Map
//(Q1)given an arrya return a new array which is twice the given array:
const input = [1,2,3,4,5]
//solution 1:
const newArray =[];
for(let i=0; i< input.length; i++){
    newArray.push(input[i]*2);
}
console.log(newArray);
//solution 2: (using map)
//(map function implementation:
// const map = (arr,fn) =>{
//     const tranf = [];
//     for (let i=0; i<arr.length; i++){
//         tranf.push(fn(arr[i]));
//     }
//     return tranf;
// })
function transform(i){
    return i*2;
}
const ans = input.map(transform);
// const ans = input.map(function (i){
//     return i*2;
// });
// const ans = input.map((i) =>{ (arrow fns)
//     return i*2;
// });
console.log(ans);

//2.Filter
//(Q)given an array return a new array which contains only the even numbers from the given array
const arr = [1,2,3,4,5]
//solution 1:
const nArray =[];
for(let i=0; i< arr.length; i++){
    if(arr[i] %2 ==0){
        nArray.push(arr[i]);
    }
}
console.log(nArray);
//solution 2: (using filter)
function flogic(n){
    if(n %2 ==0){
        return true;
    }else{
        return false;
    }
}
const farr =arr.filter(flogic);
// const farr = arr.filter(function (n){
//     if(n %2 ==0){
//         return true;
//     }else{
//         return false;
//     }
// });
// const farr = arr.filter((n) =>{ (arrow fns)
//     if(n %2 ==0){
//         return true;
//     }else{
//         return false;
//     }
// });
console.log(farr);

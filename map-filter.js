const numbers =[3,4,5,6,7,8];
const output = [];

for(let i=0; i<numbers.length; i++){
    const element = numbers[i];
    const result =element* element;
    output.push(result);
} 
console.log(output);

const numbers =[3,4,5,6,7,8];
function square (element){
    return element*element;
}


const square = element => element * element;
const square = x => x * x ;


 const result = numbers.map(function(element){
   return element*element;
})


const numbers =[3,4,5,6,7,8];
const square = numbers.map(x=> x * x);
console.log(square);;


const numbers =[3,4,5,6,7,8];
const biggerNumber = numbers.filter(x => x < 5);
console.log(biggerNumber);


const numbers =[3,4,5,6,7,8];
const isThere = numbers.find(x => x > 5);
 console.log(isThere);
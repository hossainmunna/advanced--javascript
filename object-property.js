// const students = [
//     {id: 21, name: 'Omar'},
//     {id: 21, name: 'Mannaa'},
//     {id: 21, name: 'Mayur'},
//     {id: 21, name: 'Deep'}    
// ];
//  const newNames = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     newNames.push(element); 
// }
// console.log(newNames);


const students = [
    {id: 21, name: 'Omar'},
    {id: 31, name: 'Mannaa'},
    {id: 41, name: 'Mayur'},
    {id: 71, name: 'Deepjol'}    
];

const names = students.map (s => s.name);
 //console.log(names);

const ids = students.map (s => s.id);
//console.log(ids);

const bigger = students.filter (s => s.id >40);
//console.log(bigger);

const finder = students.find (s => s.id >40);
console.log(finder);
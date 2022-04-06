// level 1: (1)
console.log([1,2,3].map(v=>v+1));
//1: (2)
console.log([1,2,3].reduce((a,b)=>a+b,0));
//1: (3)
const obj= {name: 'Elie', rank: 'Pro'};
const str=object.keys(obj).map((key)=>
{
    return "" +key+"=" +obj[key];
}).join(",");
console.log(str);



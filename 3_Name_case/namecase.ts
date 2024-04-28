let personName : string = "Shiza Sheikh";
console.log("LowerCase:", personName.toLowerCase());

console.log("UpperCase: ", personName.toUpperCase());

console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
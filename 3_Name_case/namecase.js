var personName = "Shiza Sheikh";
console.log("LowerCase:", personName.toLowerCase());
console.log("UpperCase: ", personName.toUpperCase());
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));

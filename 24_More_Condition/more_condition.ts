//Equality and Inequality Test
console.log("Equality test with string:", "Apple" === "Apple");

//Equality and Inequality Test
console.log("Inequality test with string:", ("Apple" as string) != "Orange");

//Test using Lower Case Function
console.log("Lower Case function test:", "HELLO".toLowerCase() === "hello");

//Numerical test involving equality and inequality
console.log("Equality test with numbers:" , 26 === 26);

//Numerical test involving inequality
console.log("Inequality test with numbers:" , ( 26 as number) != 35);

//Greater than 
console.log("Greater than test" , 10 > 5);

//Less than 
console.log("Less than test" , 5 < 10);

//Greate than or equal to
console.log("Greater than and equal to test:", 10 >= 10 );

//Less than or equal to
console.log("Less than and equal to test:", 5 <= 10 );

//Using & operator test
console.log("And operator test:" , 5===5 && 10 > 5);

//Using | operator test
console.log("Or operator test:" , 5===5 || false );

// Test Whether an items is in Array 
let fruits_name: string[] = ['Apple', 'Pine Apple', 'Banana', 'Mango'];
console.log('Test "Apple" in the array: ', fruits_name.includes("Apple"));

//Test Whether an items is not in Array 
console.log('Testing "Strawberry" is not in array:' , !fruits_name.includes('Strawberry'));

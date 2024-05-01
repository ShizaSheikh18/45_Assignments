// 1t Array
let current_user : string[] = [' AliShba', ' KaShaf', 'RomaiSa', ' DaniYal', 'Adam'];
// 2nd array
let new_user : string[] = [' Horain', ' AliShba', 'Fizzah', 'Ayesha', ' DaniYal'];
// Using .forEach
new_user.forEach(new_user_name => {
let lowercase: string = new_user_name.toLowerCase();

if(current_user.map(c_user => c_user.toLowerCase()).includes(lowercase)){
console.log(`The userName ${new_user_name } is not available.   Please write a diffrent  userName`);
}
else{
    console.log(`The userName ${new_user_name } is available. `);
}
});
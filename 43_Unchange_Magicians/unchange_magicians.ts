let Magician: string[] = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];

//function 3 copy array
function copy_array(arr: string[]){
return [...arr]
}

//function 2 make great
function make_great(magician_array: string[]){
for(let i = 0; i<magician_array.length; i++){
  Magician[i]= 'The Great ' + magician_array[i]
}
}

//function 1 Show magician
function show_magicians(Magicians : string[]){
     Magician.forEach( element => {
    console.log(element);
     });
}
//copy_array
const copyMagiciansArray = copy_array(Magician);

//make great
make_great(copyMagiciansArray);
console.log('\n\nThis is my original array: ')
// show_magicians
show_magicians(Magician);

//copy
console.log('\n\nThis is my Modified copy of the array: ');
show_magicians(copyMagiciansArray);
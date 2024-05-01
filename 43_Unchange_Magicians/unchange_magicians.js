var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
//function 3 copy array
function copy_array(arr) {
    return __spreadArray([], arr, true);
}
//function 2 make great
function make_great(magician_array) {
    for (var i = 0; i < magician_array.length; i++) {
        Magician[i] = 'The Great ' + magician_array[i];
    }
}
//function 1 Show magician
function show_magicians(Magicians) {
    Magician.forEach(function (element) {
        console.log(element);
    });
}
//copy_array
var copyMagiciansArray = copy_array(Magician);
//make great
make_great(copyMagiciansArray);
console.log('\n\nThis is my original array: ');
// show_magicians
show_magicians(Magician);
//copy
console.log('\n\nThis is my Modified copy of the array: ');
show_magicians(copyMagiciansArray);

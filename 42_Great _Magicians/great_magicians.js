var Magician = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
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
//make great
make_great(Magician);
// show_magicians
show_magicians(Magician);

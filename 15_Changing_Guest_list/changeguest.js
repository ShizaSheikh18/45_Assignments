var guest_list = [' Haider', ' Iqbal', ' Amna', ' Huma', ' Ayaan'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\n Me invited you on Iftar Party tomorrow. \n\n Thank you \n');
}
var not_present = " Ayaan ";
var new_guest_list = ' Aqib';
guest_list[4] = new_guest_list;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\n Me invited you on Iftar Party tomorrow. \n\n Thank you \n');
}
console.log("Mr.".concat(not_present, " will not coming tomorrow iftar party."));

let guest_list: string[] = [' Haider', ' Iqbal', ' Amna' ,' Huma', ' Ayaan'];
// for(let i = 0; i< guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] +',\n Me invited you on Iftar Party tomorrow. \n\n Thank you \n' );
// }

let not_present : string = " Ayaan ";
let  new_guest_list : string = ' Aqib';
guest_list[4] = new_guest_list;
for(let i = 0; i< guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] +',\n Me invited you on Iftar Party tomorrow. \n\n Thank you \n' );
}
console.log(`Mr.${ not_present } will not coming tomorrow iftar party.`);
guest_list.unshift(' Aqsa', ' Hoorain ', ' Maryam');
for(let i = 0; i< guest_list.length; i++){
    console.log('Respected Sir/Madam ' + guest_list[i] +',\n Me invited you on Iftar Party tomorrow. \n\n Thank you \n' );
}
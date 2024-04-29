let guest_list: string[] = [' Haider', ' Iqbal', ' Amna' ,' Huma', ' Ayaan'];
// for(let i = 0; i< guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] +',\n Me invited you on Iftar Party tomorrow. \n\n Thank you \n' );
// }

let not_present : string = " Ayaan ";
let  new_guest_list : string = ' Aqib';
guest_list[4] = new_guest_list;
// for(let i = 0; i< guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] +',\n Me invited you on Iftar Party tomorrow. \n\n Thank you \n' );
// }
// console.log(`Mr.${ not_present } will not coming tomorrow iftar party.`);
guest_list.unshift(' Aqsa', ' Hoorain ', ' Maryam');
// for(let i = 0; i< guest_list.length; i++){
//     console.log('Respected Sir/Madam ' + guest_list[i] +',\n Me invited you on Iftar Party tomorrow. \n\n Thank you \n' );
// }
// console.log('\nSorry we cannot arrange iftar party , Only 2 people allow. ');
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    // console.log(`Sorry Mr/Mrs, ${remove_guest} You are not invited for Iftar Party`)
}

// for(let i = 0; i<guest_list.length; i++){
//     console.log('Dear Mr/Mrs.' + guest_list[i] + ',\n\nYou are still invited Iftar party. \n\nThank you\n\n');
// }

// Remove all guests using Array
guest_list.splice(0, 2);

console.log(guest_list);

//EXERCISE : 19

console.log(`Total number of Guest are: ${guest_list.length}`);


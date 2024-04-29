"use strict";
const userNames = ['Admin', 'Moderator', 'Kashaf', 'Minal', 'Alishba'];
userNames.forEach(userName => {
    if (userName === 'Admin') {
        console.log('Hello Admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${userName}, Thank you for logging in again.`);
    }
});

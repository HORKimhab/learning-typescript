"use strict";
console.log('Typescript is here');
console.log('Other from TypeScript with live-project');
console.log('Live Testing...');
/* Class TypeScript */
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Phnom Penh";
    }
}
// const HKimahb = new User(name: 'hkimhab', email: 'hkimhab@gmail.com') // Error 
const user = new User('HKimhab', 'hkimhab@gmail.com');
// user.city = "Phnom Pneh"

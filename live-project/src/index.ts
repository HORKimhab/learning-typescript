console.log('Typescript is here');
console.log('Other from TypeScript with live-project');
console.log('Live Testing...');

/* Class TypeScript */
class User { 
    readonly city: string = "Phnom Penh"
    constructor(
        public email: string, 
        public name: string, 
        // private userId: string
    ){}
}

// const HKimahb = new User(name: 'hkimhab', email: 'hkimhab@gmail.com') // Error 
const user = new User('HKimhab', 'hkimhab@gmail.com');
// user.city = "Phnom Pneh"
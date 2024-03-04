// Ref: https://medium.com/@InspireTech/what-are-decorators-in-typescript-and-how-to-use-decorators-d82d15c5851f

// Without decorator
class User {
    constructor(private name: string, private age: number) {}
  
    greet() {
      console.log('start: greet')
      console.log(`Hello, my name is ${this.name}.`);
      console.log('end: greet')
    }
  
    printAge() {
      console.log('start: printAge')
      console.log(`I am ${this.age} years old`);
      console.log('end: printAge')
    }
  }
  
const user = new User("Ron", 25);
user.greet();
user.printAge();

// Function to be decorator 
function logger(originalMethod: any, _context: any) {
    function replacementMethod(this: any, ...args: any[]) {
      console.log("start:", originalMethod.name);
      const result = originalMethod.call(this, ...args);
      console.log("end:", originalMethod.name);
      return result;
    }
    return replacementMethod;
}

// With decorator
class UserWithDecorator {
    constructor(private name: string, private age: number) {}
  
    @logger
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  
    @logger
    printAge() {
      console.log(`I am ${this.age} years old`);
    }
  }
  
const user2 = new UserWithDecorator("Ron", 25);
user2.greet();
user2.printAge();







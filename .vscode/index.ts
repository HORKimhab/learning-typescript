/*  Type Assignment
    - Explicit: let firstName: string = "Dylan"; (Declare variable as string type)
        - Cannot reassign variable 
    - Implicit: let firstName = "Dylan"; (Type of str)
        - can reassign variable 
*/

let v: any = true;  // v is special type accept any value and reassign
let un: unknown = 22; // `unkown is safer than v`

// Error: Type 'boolean' is not assignable to type 'never'.
// let x: never = true; 

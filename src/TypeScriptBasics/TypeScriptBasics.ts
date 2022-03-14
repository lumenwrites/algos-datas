let arr: number[] = [1, 2, 3]
// Tuple - specific types in a specific order
let person: [number, string, boolean] = [18, "James", true]
// Tuple array
let people: [number, string][] = [
  [18, "James"]
]

// Using multiple types. 
// Union - any of these numbers
let id: number | string = 22
// Enum - define a set of constants (numbers or strings) 
enum Direction1 { Up, Down, Left, Right } // contains numeric values, from 0 to 3
enum Direction2 {
  Up = 'Up',
  Down = 'Down'
}
let dir: Direction2 = Direction2.Up
console.log(dir)

// Objects
type User = {
  id: number,
  name: string
}
const user: User = {
  id: 1,
  name: "John"
}

// Type assertion
let cid: any = 1
// this:
// let customerId = <number>cid
// or this: 
let customerId = cid as number

// Types in functions
function addNum(a: number, b: number): number {
  return a + b
}
function log(message: string | number): void {
  console.log(message)
}
interface MathFunc {
  (x: number, y: number): number
}

// Interface - is like a custom type, specific structure for an object
// Use interfaces for objects
interface IPerson {
  readonly id: number,
  name: string,
  age?: number, // add question mark to have an optional property
  register(): void
}
// Classes
class Person implements IPerson {
  // private - can only access from wihtin a class
  // protected - can only access from wihtin a class or any class extended from it
  id: number
  name: string
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
  register() {
    console.log(`${this.name} is now registered`)
  }
}
const mike = new Person(0, "Mike")
mike.register()

// Extend class
class Employee extends Person {
  position: string
  constructor(id: number, name: string, position: string) {
    super(id, name) // call parent constructor
    this.position = position
  }
}

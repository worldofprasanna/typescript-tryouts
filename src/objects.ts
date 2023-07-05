type Point = {x: number, y: number}

const point: Point = {x: 0, y: 0};

let center: Point = {
  x: 0,
  y: 0,
}

function add1(a: number, b: number): number {
  return a + b;
}

function log(...values: number[]): void {
  console.log(values);
}

type Add = (a: number, b: number) => number

let add: Add;

add = function(c: number, d: number): number {
  return c + d
}

add = (a, b) => a + b

type User = { id: string }
type Product = { id: string }

let user: User = { id: '123'}
let product: Product = { id: '123'}

user = product;
product = user;

type Point2D = { x: number, y: number }
type Point3D = { x: number, y: number, z: number }

let p2d = { x: 0, y: 10 }
let p3d = { x: 0, y: 10, z: 20}

// p3d = p2d;
p2d = p3d;

function takesPoint(point2D: Point2D): void {

}

takesPoint(p3d)
function load(): unknown { return 5 }

let hello = load();

if (typeof hello === 'string') {
  const trimmed = hello.trim()
}

(hello as string).trim()

let leet;

leet = '123'

const number = +leet;

export function add(a: number, b: number): number {
  return a + b
}
let regext = new RegExp('ab+c')

let array = [1, 2, 3]


class Queue<T> {
  private data: Array<T> = [];
}

let queue = new Queue<number>();

let array1: number[] = [1, 2, 3]

let tuple: [number, number] = [0, 0]

type NumberOrError =
| number
| string

function div(a: number, b: number): NumberOrError {
  if (b == 0) {
    return 'divide by zero'
  } else {
    return a / b
  }
}

// make example with padding itself
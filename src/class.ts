class Animal {
  #name: string

  constructor(name: string) {
    this.#name = name
  }

  public move(dist: number): void {
    console.log(`${this.#name} moved ${dist} meters`);
  }
}

let cat = new Animal('Cat')
cat.move(10)
// cat.name = 'test'

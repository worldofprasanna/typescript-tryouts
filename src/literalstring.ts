type Direction = 'North' | 'South' | 'East' | 'West'
let direction: Direction

direction = 'North'

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6

function rollDice(): DiceValue{
  return (Math.floor(Math.random() * 6) + 1) as DiceValue

}

if (rollDice() == 7) {
  
}
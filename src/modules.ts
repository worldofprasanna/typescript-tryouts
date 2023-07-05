import {add} from './assertions'

log(add(1, 2))


console.log(
  'logg',
  process.env.USER
);

import fs from 'fs'

fs.writeFileSync('h.txt', 'hello')
let exAny: any;
let exUnknown: unknown;


exUnknown = "123"
exUnknown = true

if (typeof exUnknown === 'string') {
  exUnknown.trim()
}

exAny = '123'
exAny = true

exAny.trim().what().it()
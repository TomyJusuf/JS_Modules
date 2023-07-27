// Modules
import playGuitar from './guitars.mjs'
console.log(playGuitar())

import { shredding, plucking } from './guitars.mjs'
console.log(shredding(), plucking())

import { shredding as shred, plucking as fingerplay } from './guitars.mjs'
console.log(shred())
console.log(fingerplay())

import User from './user.mjs'
const me = new User('Tomasmatusek@zsenm.cz', 'Tomas')
console.log(me)
console.log(me._name)

import readline from 'node:readline/promises'
import getUsername from './utils/get-user-name.mjs'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const username = getUsername(process.argv)
rl.on('line', (input) => {
  console.log(`you typed: ${input}!`)
})

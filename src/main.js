import readline from 'node:readline/promises'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getUsername } from './utils/get-user-name.mjs'
import { getWorkingDirectory } from './utils/get-working-directory.mjs'
import { isUsernameAndWorkingDirectoryPresent } from './utils/check-username-and-working-directory.mjs'
import { implementedCommands } from './core/implemented-commands.mjs'
import { state } from './core/state.mjs'
import { displayInvalidInput } from './utils/display-invalid-input.mjs'
import { displayCurrentDirectory } from './utils/display-current-directory.mjs'
import { displayOperationFailed } from './utils/display-operation-failed.mjs'

const rl = readline.createInterface({
  input: process.stdin,
  output: false,
})

const username = getUsername(process.argv)
const workingDirectory = getWorkingDirectory(
  dirname(fileURLToPath(import.meta.url)),
  username
)

if (!isUsernameAndWorkingDirectoryPresent(username, workingDirectory)) {
  process.exit()
}

state.workingDirectory = workingDirectory
state.username = username

console.log(`Welcome to the File Manager, ${state.username}!`)
displayCurrentDirectory()

rl.on('line', async (input) => {
  if (input === '.exit') {
    rl.close()
    return
  }

  const tokkens = input.split(' ')
  const commandName = tokkens.shift()

  const command = implementedCommands[commandName]

  if (command) {
    rl.pause()

    try {
      await command(...tokkens)
    } catch (err) {
      console.log(err) 
      displayOperationFailed()
    }

    displayCurrentDirectory()
    rl.resume()

    return
  }

  displayInvalidInput()
  displayCurrentDirectory()
})

process.on('beforeExit', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`)
})

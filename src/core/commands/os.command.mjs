import os from 'node:os'
import { displayInvalidInput } from '../../utils/display-invalid-input.mjs'
import { appendStringWithEOS } from '../../utils/append-string-with-eos.mjs'

const flags = {
  '--EOL': () => os.EOL,
  '--username': () => os.userInfo().username,
  '--architecture': () => os.arch(),
  '--homedir': () => os.homedir(),
  '--cpus': () => {
    const cpus = os.cpus()
    let output = ''
    output = appendStringWithEOS(output, `Overall amount of CPUs: ${cpus.length}`)

    cpus.forEach((cpu, index) => {
     output = appendStringWithEOS(output, `CPU ${index + 1}:`)
     output = appendStringWithEOS(output, `  Model: ${cpu.model}`)
     output = appendStringWithEOS(output, `  Speed: ${cpu.speed / 1000} GHz`) // Convert speed to GHz
    })
    
    return output
  },
}

/**
 * @param  {string} flag
 */
export const osCommand = async (flag) => {
  const commandWithFlag = flags[flag]

  if (commandWithFlag) {
    const res = await commandWithFlag()
    console.log(res)
    return
  }

  displayInvalidInput()
}

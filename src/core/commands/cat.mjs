import fs from 'node:fs/promises'
import path from 'path'
import { state } from '../state.mjs'
import { displayInvalidInput } from '../../utils/display-invalid-input.mjs'
import { pipeline } from 'node:stream/promises'

export const cat = async (fileName) => {
  if (!fileName) {
    displayInvalidInput()

    return
  }

  const { currentDirectory } = state

  const pathToFile = path.resolve(currentDirectory, fileName)

  const fileToRead = await fs.open(pathToFile, 'r')

  const stream = fileToRead.createReadStream()

  await pipeline(stream, process.stdout, {
    end: false
  })

  fileToRead.close()
}

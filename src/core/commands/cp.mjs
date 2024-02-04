import fs from 'node:fs/promises'
import path from 'node:path'
import { pipeline } from 'stream/promises'
import { state } from '../state.mjs'
import { displayInvalidInput } from '../../utils/display-invalid-input.mjs'

/**
 * @param {string} input
 * @param {string} outputDir
 */
export const cp = async (input, outputDir) => {
  if (!input || !outputDir) {
    displayInvalidInput()

    return
  }

  const { currentDirectory } = state

  const inputPath = path.resolve(currentDirectory, input)
  const outputPath = path.resolve(
    currentDirectory,
    outputDir,
    path.basename(input)
  )

  console.log(inputPath, outputPath)

  const inputFile = await fs.open(inputPath, 'r')
  const outputFile = await fs.open(outputPath, 'w')

  const inputStream = inputFile.createReadStream()
  const outputStream = outputFile.createWriteStream()

  await pipeline(inputStream, outputStream)

  inputFile.close()
  outputFile.close()
}

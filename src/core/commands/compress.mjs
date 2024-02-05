import fs from 'node:fs/promises'
import zlib from 'node:zlib'
import path from 'node:path'
import { state } from '../state.mjs'
import { pipeline } from 'node:stream/promises'

/**
 *
 * @param {string} inputFile
 * @param {string} outputFile
 * @param {{decompress?: boolean}} options
 */
export const makeCompression = async (
  inputFile,
  outputFile,
  { decompress = true }
) => {
  if (!inputFile || !outputFile) {
    displayInvalidInput()

    return
  }
  const { currentDirectory } = state

  const inputPath = path.resolve(currentDirectory, inputFile)
  const outputPath = path.resolve(currentDirectory, outputFile)

  const inputHandle = await fs.open(inputPath, 'r')
  const outputHandle = await fs.open(outputPath, 'w')

  const inputFileStream = inputHandle.createReadStream(inputPath)
  const outputFileStream = outputHandle.createWriteStream(outputPath)

  const brotliCompress = zlib.createBrotliCompress()
  const brotliDecompress = zlib.createBrotliDecompress()

  await pipeline(
    inputFileStream,
    decompress ? brotliDecompress : brotliCompress,
    outputFileStream
  )
}

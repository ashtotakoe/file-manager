import path from 'node:path'
import fs from 'node:fs/promises'
import { state } from '../state.mjs'

export const rn = async (oldFileName, newFileName) => {
  const { currentDirectory } = state

  const inputPath = path.resolve(currentDirectory, oldFileName)
  const outputPath = path.resolve(currentDirectory, newFileName)

  await fs.rename(inputPath, outputPath)
}

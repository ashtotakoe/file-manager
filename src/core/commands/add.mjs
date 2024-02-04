import path from 'node:path'
import fs from 'node:fs/promises'
import { state } from '../state.mjs'

/**
 * @param {string} fileName
 */
export const add = async (fileName) => {
  const { currentDirectory } = state

  const pathToFile = path.resolve(currentDirectory, fileName)

  await fs.writeFile(pathToFile, '')
}

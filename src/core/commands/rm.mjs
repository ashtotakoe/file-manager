import fs from 'node:fs/promises'
import path from 'node:path'
import { state } from '../state.mjs'

/**
 * @param {string} fileToRemove
 */
export const rm = async (fileToRemove) => {
  const { currentDirectory } = state

  const filePath = path.resolve(currentDirectory, fileToRemove)

  await fs.unlink(filePath)
}

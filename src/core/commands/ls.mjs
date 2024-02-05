import fs from 'node:fs/promises'
import { state } from '../state.mjs'
import { extractDirentsAndSortAlphabetically } from '../../utils/extract-dirents-and-sort-alphabetically.mjs'

export const ls = async () => {
  const { currentDirectory } = state

  const dirItems = await fs.readdir(currentDirectory, { withFileTypes: true })

  const files = extractDirentsAndSortAlphabetically(dirItems, 'file')
  const directories = extractDirentsAndSortAlphabetically(dirItems, 'directory')

  console.table(directories.concat(files))
  
}

import { cp } from './cp.mjs'
import { rm } from './rm.mjs'

/**
 * @param {string} inputFile
 * @param {string} outputDir
 */
export const mv = async (inputFile, outputDir) => {
  if (!inputFile || !outputDir) {
    displayInvalidInput()

    return
  }

  await cp(inputFile, outputDir)
  await rm(inputFile)
}

import path from 'node:path'
import { access, constants } from 'node:fs/promises'
import { state } from '../state.mjs'
import { showInvalidInputError } from '../../utils/show-invalid-input-error.mjs'

export const cd = async (newPath) => {
  if (newPath) {
    const { currentDirectory, workingDirectory } = state

    const newAbsoluteCurrentPath = path.resolve(currentDirectory, newPath)

    if (
      path
        .relative(workingDirectory, newAbsoluteCurrentPath)
        .split(path.sep)
        .shift() === '..'
    ) {
      return
    }

    try {
      await access(newAbsoluteCurrentPath, constants.F_OK)

      state.currentDirectory = newAbsoluteCurrentPath
    } catch (err) {
      console.log('directory is not found')
    }

    return
  }

  showInvalidInputError()
}

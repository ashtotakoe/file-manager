import path from 'node:path'
import { access, constants } from 'node:fs/promises'
import { state } from '../state.mjs'
import { showInvalidInputError } from '../../utils/show-invalid-input-error.mjs'
import { displayOperationFailed } from '../../utils/display-operation-failed.mjs'

export const cd = async (newPath) => {
  if (!newPath) {
    showInvalidInputError()
    return
  }

  try {
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

    await access(newAbsoluteCurrentPath, constants.F_OK)

    state.currentDirectory = newAbsoluteCurrentPath
  } catch (err) {
    displayOperationFailed()
  }
}

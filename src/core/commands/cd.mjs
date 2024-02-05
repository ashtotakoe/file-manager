import path from 'node:path'
import { access, stat, constants } from 'node:fs/promises'
import { state } from '../state.mjs'
import { displayInvalidInput } from '../../utils/display-invalid-input.mjs'
import { displayOperationFailed } from '../../utils/display-operation-failed.mjs'

export const cd = async (newPath) => {
  if (!newPath) {
    displayInvalidInput()

    return
  }

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

  const pathStat = await stat(newAbsoluteCurrentPath)
  if (!pathStat.isDirectory()) {
    displayOperationFailed()

    return
  }

  state.currentDirectory = newAbsoluteCurrentPath
}

import { state } from '../state.mjs'

export const up = (...args) => {
  let { workingDirectory, currentDirectory } = state

  console.log(workingDirectory, currentDirectory)
}

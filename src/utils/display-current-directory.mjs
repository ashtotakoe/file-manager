import { state } from '../core/state.mjs'

export const displayCurrentDirectory = () => {
  console.log(`You are currently in ${state.currentDirectory}`)
}

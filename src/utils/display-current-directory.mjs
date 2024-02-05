import { state } from '../core/state.mjs'

/**
 * Displays the current directory
 * @returns {void}
 */
export const displayCurrentDirectory = () => {
  console.log(`You are currently in ${state.currentDirectory}`)
}

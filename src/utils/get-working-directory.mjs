import os from 'node:os'

/**
 * @returns {string}
 */
export const getWorkingDirectory = () => {
  return os.homedir()
}

const data = {
  currentDirectory: null,
  workingDirectory: null,
  username: null,
}

export const state = {
  /**
   * @param {string} currentDirectory
   */
  set currentDirectory(currentDirectory) {
    data.currentDirectory = currentDirectory
  },

  get currentDirectory() {
    return data.currentDirectory
  },

  /**
   * @param {string} workingDirectory
   */
  set workingDirectory(workingDirectory) {
    if (!data.workingDirectory) {
      data.workingDirectory = workingDirectory
      data.currentDirectory = workingDirectory
    }
  },

  get workingDirectory() {
    return data.workingDirectory
  },

  /**
   * @param {string} currentDirectory
   */
  set username(username) {
    if (!data.username) {
      data.username = username
    }
  },

  /**
   * @returns {string}
   */
  get username() {
    return data.username
  },
}

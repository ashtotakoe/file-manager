const data = {
  currentDirectory: null,
  workingDirectory: null,
  username: null,
}

export const state = {
  set currentDirectory(currentDirectory) {
    data.currentDirectory = currentDirectory
  },

  get currentDirectory() {
    return data.currentDirectory
  },

  set workingDirectory(workingDirectory) {
    if (!data.workingDirectory) {
      data.workingDirectory = workingDirectory
      data.currentDirectory = workingDirectory
    }
  },

  get workingDirectory() {
    return data.workingDirectory
  },

  set username(username) {
    if (!data.username) {
      data.username = username
    }
  },

  get username() {
    return data.username
  },
}

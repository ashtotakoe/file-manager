/**
 * @param {string} username
 * @param {string} workingDirectory
 * @returns {boolean}
 */

export const isUsernameAndWorkingDirectoryPresent = (
  username,
  workingDirectory
) => {
  if (username && workingDirectory) {
    return true
  }

  if (!username) {
    console.log(
      'Please provide a username as an argument. For exapmle: "npm run start -- --username=your_username"'
    )
    return false
  }

  if (!workingDirectory) {
    console.log('working directory with such username was not found')
  }

  return false
}

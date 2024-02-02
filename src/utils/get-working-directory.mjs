import * as p from 'node:path'

export const getWorkingDirectory = (path, username) => {
  const pathSegments = path.split(p.sep)

  const usrDir = pathSegments.reduce((acc, segment) => {
    if (segment === username) {
      return segment
    }

    return acc
  }, null)

  if (usrDir) {
    return pathSegments.slice(0, pathSegments.indexOf(usrDir) + 1).join(p.sep)
  }

  return null
}

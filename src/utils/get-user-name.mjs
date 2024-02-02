export const getUsername = (args) => {
  const usernameArg = args.find((arg) => arg.startsWith('--username'))

  if (usernameArg) {
    const [, username] = usernameArg.split('=')
    return username
  }

  return null
}

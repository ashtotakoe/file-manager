const getUsername = (args) => {
  const usernameArg = args.find((arg) => arg.startsWith('--username'))

  if (usernameArg) {
    const [, username] = usernameArg.split('=')
    console.log(`Welcome to the File Manager, ${username}!`)
    return username
  }

  console.log(
    'Please provide a username as an argument. For exapmle: "npm run start -- --username=your_username"'
  )
  process.exit()
}

export default getUsername

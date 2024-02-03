import { up } from './commands/up.mjs'
import { cd } from './commands/cd.mjs'
import { ls } from './commands/ls.mjs'
import { cat } from './commands/cat.mjs'

export const implementedCommands = {
  up,
  cd,
  ls,
  cat,
}

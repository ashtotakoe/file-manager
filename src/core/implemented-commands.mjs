import { up } from './commands/up.mjs'
import { cp } from './commands/cp.mjs'
import { cd } from './commands/cd.mjs'
import { ls } from './commands/ls.mjs'
import { cat } from './commands/cat.mjs'
import { add } from './commands/add.mjs'
import { rm } from './commands/rm.mjs'
import { rn } from './commands/rn.mjs'
import { mv } from './commands/mv.mjs'
import { osCommand as os } from './commands/os.command.mjs'

export const implementedCommands = {
  up,
  cd,
  ls,
  cat,
  add,
  rm,
  cp,
  mv,
  rn,
  os
}

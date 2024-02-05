import { cd } from './cd.mjs'

export const up = async (...args) => {
  await cd('..')
}

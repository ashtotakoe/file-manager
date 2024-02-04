import path from 'node:path'
import { createHash } from 'node:crypto'
import { open } from 'node:fs/promises'
import { pipeline } from 'node:stream/promises'
import { Transform } from 'node:stream'
import { state } from '../state.mjs'

const toSHA256 = new Transform({
  transform(chunk, encoding, callback) {
    const content = chunk.toString()

    const hash = createHash('sha256').update(content).digest('hex')

    callback(null, `${hash} \n`)
  },
})

/**
 * @param {string} targetFileName
 */
export const hash = async (targetFileName) => {
  const { currentDirectory } = state
  const { stdout } = process

  const targetFilePath = path.resolve(currentDirectory, targetFileName)
  const targetFileHandle = await open(targetFilePath, 'r')

  const stream = targetFileHandle.createReadStream()

  await pipeline(stream, toSHA256, stdout, { end: false })

  targetFileHandle.close()
}

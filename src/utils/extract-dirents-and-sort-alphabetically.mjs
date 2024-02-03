/**
 * @param {Dirent[]} dirents - the dirent array
 * @param {"file" | "directory"} extract - the extract type
 * @returns {Dirent[]}
 */
export function extractDirentsAndSortAlphabetically(dirents, extract) {
  return dirents
    .filter((dirent) =>
      extract === 'file' ? dirent.isFile() : dirent.isDirectory()
    )
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((dirent) => ({name: dirent.name, type: dirent.isFile() ? 'file' : 'directory'}))
}

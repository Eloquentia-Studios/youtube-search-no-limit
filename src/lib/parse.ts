/**
 * Parses Youtube HTML, and returns the ytInitalData object.
 *
 * @param html HTML string.
 * @returns ytInitialData parsed from HTML.
 */
const parse = (html: string) => {
  const variableName = 'var ytInitialData = '
  const dataStart = html.indexOf(variableName) + variableName.length
  let dataEnd = html.indexOf('</script>', dataStart)

  // In case Youtube decides to change formatting slightly (remove ending semi-colon).
  if (html[dataEnd - 1] === ';') dataEnd -= 1

  return JSON.parse(html.substring(dataStart, dataEnd))
}

export default parse

/**
 * Convert a youtube string duration to number of seconds.
 *
 * @param duration The duration given by youtube.
 * @returns The duration in seconds.
 */
const parseDuration = (duration: string): number => {
  const durationParts = duration.split(':')
  const durationSeconds = durationParts.reduce((acc, part) => {
    return acc * 60 + parseInt(part)
  }, 0)
  return durationSeconds
}

export default parseDuration

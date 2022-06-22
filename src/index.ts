import search from './lib/search.js'
import type YouTubeVideo from './types/YoutubeVideo'

export {
  /**
   * Searches YouTube for videos matching the given query.
   *
   * @param query Search query.
   * @param nrOfResults Max number of results to return.
   * @returns Array of {@link YouTubeVideo} YouTubeVideo objects.
   */
  search
}

export type { YouTubeVideo }

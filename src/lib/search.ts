import fetch from 'node-fetch'
import parse from './parse.js'
import extractVideos from './extractVideos.js'
import type VideoResponseData from '../types/VideoResponseData'
import parseVideo from './parseVideo.js'
import type YouTubeVideo from './../types/YoutubeVideo'

/**
 * Searches YouTube for videos matching the given query.
 *
 * @param query Search query.
 * @param nrOfResults Max number of results to return.
 * @returns Array of {@link YouTubeVideo} YouTubeVideo objects.
 */
const search = async (query: string, nrOfResults?: number): Promise<Array<YouTubeVideo>> => {
  const queryUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`

  const response = await fetch(queryUrl)
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`)
  }

  const html = await response.text()
  const ytInitialData = parse(html)
  const unparsedVideos = extractVideos(ytInitialData, nrOfResults)
  const videos = unparsedVideos.map((video: VideoResponseData) => parseVideo(video))
  return videos
}

export default search

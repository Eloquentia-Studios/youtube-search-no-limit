import fetch from 'node-fetch'
import parse from './parse.js'
import extractVideos from './extractVideos.js'
import type VideoResponseData from '../types/videoResponseData.d'
import parseVideo from './parseVideo.js'

const search = async (query: string) => {
  const queryUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`

  const response = await fetch(queryUrl)
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`)
  }

  const html = await response.text()
  const ytInitialData = parse(html)
  const unparsedVideos = extractVideos(ytInitialData, 1)
  const videos = unparsedVideos.map((video: VideoResponseData) => parseVideo(video))
  return videos
}

export default search

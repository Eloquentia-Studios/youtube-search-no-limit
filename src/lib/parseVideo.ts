import type VideoResponseData from '../types/videoResponseData.d'
import type Thumbnail from '../types/Thumbnail.d'
import type YouTubeVideo from './../types/YoutubeVideo.d'
import parseDuration from './parseDuration.js'

const parseVideo = (videoData: VideoResponseData): YouTubeVideo => {
  // Parse video data.
  const id = videoData.videoId
  const title = videoData.title.runs[0].text
  const durationText = videoData.lengthText.simpleText
  const duration = parseDuration(durationText)
  const url = `https://www.youtube.com/watch?v=${id}`
  const thumbnails = videoData.thumbnail.thumbnails as Array<Thumbnail>

  // Parse channel data.
  const channelName = videoData.longBylineText.runs[0].text
  const channelUrl = `https://youtube.com${videoData.longBylineText.runs[0].navigationEndpoint.commandMetadata.webCommandMetadata.url}`
  const channelThumbnail = videoData.channelThumbnailSupportedRenderers.channelThumbnailWithLinkRenderer.thumbnail.thumbnails[0] as Thumbnail

  return {
    id,
    title,
    durationText,
    duration,
    url,
    thumbnails,
    channel: {
      name: channelName,
      url: channelUrl,
      thumbnail: channelThumbnail
    }
  }
}

export default parseVideo

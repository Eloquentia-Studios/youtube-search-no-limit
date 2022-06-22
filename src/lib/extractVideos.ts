import type VideoResponseData from '../types/videoResponseData.d'

/**
 * Extract only video data from ytInitialData.
 *
 * @param ytInitalData ytInitialData object.
 * @param nrOfVideos Number of videos to return.
 * @returns Array of {@link VideoResponseData} VideoResponseData objects.
 */
const extractVideos = (ytInitalData: any, nrOfVideos?: number) => {
  const videoRenderers = ytInitalData.contents.twoColumnSearchResultsRenderer.primaryContents.sectionListRenderer.contents[0].itemSectionRenderer.contents.filter((renderer: any) => renderer.videoRenderer)
  const videoRendererArray = videoRenderers.slice(0, nrOfVideos || videoRenderers.length).map((renderer: any) => renderer.videoRenderer) as Array<VideoResponseData>
  return videoRendererArray
}

export default extractVideos

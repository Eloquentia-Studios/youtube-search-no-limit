import type Channel from './Channel'
import type Thumbnail from './Thumbnail'

export default interface YouTubeVideo {
  id: string
  title: string
  duration: number
  durationText: string
  url: string
  thumbnails: Array<Thumbnail>
  channel: Channel
}

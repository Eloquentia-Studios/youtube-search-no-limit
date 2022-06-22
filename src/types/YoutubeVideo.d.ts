import type Channel from './Channel.d'
import type Thumbnail from './Thumbnail.d'

export default interface YouTubeVideo {
  id: string
  title: string
  duration: number
  durationText: string
  url: string
  thumbnails: Array<Thumbnail>
  channel: Channel
}

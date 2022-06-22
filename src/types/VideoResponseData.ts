interface Thumbnail2 {
  url: string
  width: number
  height: number
}

interface Thumbnail {
  thumbnails: Thumbnail2[]
}

interface Run {
  text: string
}

interface AccessibilityData {
  label: string
}

interface Accessibility {
  accessibilityData: AccessibilityData
}

interface Title {
  runs: Run[]
  accessibility: Accessibility
}

interface WebCommandMetadata {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface CommandMetadata {
  webCommandMetadata: WebCommandMetadata
}

interface BrowseEndpoint {
  browseId: string
  canonicalBaseUrl: string
}

interface NavigationEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata
  browseEndpoint: BrowseEndpoint
}

interface Run2 {
  text: string
  navigationEndpoint: NavigationEndpoint
}

interface LongBylineText {
  runs: Run2[]
}

interface PublishedTimeText {
  simpleText: string
}

interface AccessibilityData2 {
  label: string
}

interface Accessibility2 {
  accessibilityData: AccessibilityData2
}

interface LengthText {
  accessibility: Accessibility2
  simpleText: string
}

interface ViewCountText {
  simpleText: string
}

interface WebCommandMetadata2 {
  url: string
  webPageType: string
  rootVe: number
}

interface CommandMetadata2 {
  webCommandMetadata: WebCommandMetadata2
}

interface CommonConfig {
  url: string
}

interface Html5PlaybackOnesieConfig {
  commonConfig: CommonConfig
}

interface WatchEndpointSupportedOnesieConfig {
  html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig
}

interface WatchEndpoint {
  videoId: string
  params: string
  watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig
}

interface NavigationEndpoint2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata2
  watchEndpoint: WatchEndpoint
}

interface Icon {
  iconType: string
}

interface AccessibilityData3 {
  label: string
}

interface MetadataBadgeRenderer {
  icon: Icon
  style: string
  tooltip: string
  trackingParams: string
  accessibilityData: AccessibilityData3
}

interface OwnerBadge {
  metadataBadgeRenderer: MetadataBadgeRenderer
}

interface WebCommandMetadata3 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface CommandMetadata3 {
  webCommandMetadata: WebCommandMetadata3
}

interface BrowseEndpoint2 {
  browseId: string
  canonicalBaseUrl: string
}

interface NavigationEndpoint3 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata3
  browseEndpoint: BrowseEndpoint2
}

interface Run3 {
  text: string
  navigationEndpoint: NavigationEndpoint3
}

interface OwnerText {
  runs: Run3[]
}

interface WebCommandMetadata4 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface CommandMetadata4 {
  webCommandMetadata: WebCommandMetadata4
}

interface BrowseEndpoint3 {
  browseId: string
  canonicalBaseUrl: string
}

interface NavigationEndpoint4 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata4
  browseEndpoint: BrowseEndpoint3
}

interface Run4 {
  text: string
  navigationEndpoint: NavigationEndpoint4
}

interface ShortBylineText {
  runs: Run4[]
}

interface AccessibilityData4 {
  label: string
}

interface Accessibility3 {
  accessibilityData: AccessibilityData4
}

interface ShortViewCountText {
  accessibility: Accessibility3
  simpleText: string
}

interface Run5 {
  text: string
}

interface Text {
  runs: Run5[]
}

interface Icon2 {
  iconType: string
}

interface WebCommandMetadata5 {
  sendPost: boolean
}

interface CommandMetadata5 {
  webCommandMetadata: WebCommandMetadata5
}

interface WebCommandMetadata6 {
  sendPost: boolean
  apiUrl: string
}

interface CommandMetadata6 {
  webCommandMetadata: WebCommandMetadata6
}

interface CreatePlaylistServiceEndpoint {
  videoIds: string[]
  params: string
}

interface OnCreateListCommand {
  clickTrackingParams: string
  commandMetadata: CommandMetadata6
  createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint
}

interface AddToPlaylistCommand {
  openMiniplayer: boolean
  videoId: string
  listType: string
  onCreateListCommand: OnCreateListCommand
  videoIds: string[]
}

interface Action {
  clickTrackingParams: string
  addToPlaylistCommand: AddToPlaylistCommand
}

interface SignalServiceEndpoint {
  signal: string
  actions: Action[]
}

interface ServiceEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata5
  signalServiceEndpoint: SignalServiceEndpoint
}

interface MenuServiceItemRenderer {
  text: Text
  icon: Icon2
  serviceEndpoint: ServiceEndpoint
  trackingParams: string
}

interface Item {
  menuServiceItemRenderer: MenuServiceItemRenderer
}

interface AccessibilityData5 {
  label: string
}

interface Accessibility4 {
  accessibilityData: AccessibilityData5
}

interface MenuRenderer {
  items: Item[]
  trackingParams: string
  accessibility: Accessibility4
}

interface Menu {
  menuRenderer: MenuRenderer
}

interface Thumbnail4 {
  url: string
  width: number
  height: number
}

interface Thumbnail3 {
  thumbnails: Thumbnail4[]
}

interface WebCommandMetadata7 {
  url: string
  webPageType: string
  rootVe: number
  apiUrl: string
}

interface CommandMetadata7 {
  webCommandMetadata: WebCommandMetadata7
}

interface BrowseEndpoint4 {
  browseId: string
}

interface NavigationEndpoint5 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata7
  browseEndpoint: BrowseEndpoint4
}

interface AccessibilityData6 {
  label: string
}

interface Accessibility5 {
  accessibilityData: AccessibilityData6
}

interface ChannelThumbnailWithLinkRenderer {
  thumbnail: Thumbnail3
  navigationEndpoint: NavigationEndpoint5
  accessibility: Accessibility5
}

interface ChannelThumbnailSupportedRenderers {
  channelThumbnailWithLinkRenderer: ChannelThumbnailWithLinkRenderer
}

interface AccessibilityData7 {
  label: string
}

interface Accessibility6 {
  accessibilityData: AccessibilityData7
}

interface Text2 {
  accessibility: Accessibility6
  simpleText: string
}

interface ThumbnailOverlayTimeStatusRenderer {
  text: Text2
  style: string
}

interface UntoggledIcon {
  iconType: string
}

interface ToggledIcon {
  iconType: string
}

interface WebCommandMetadata8 {
  sendPost: boolean
  apiUrl: string
}

interface CommandMetadata8 {
  webCommandMetadata: WebCommandMetadata8
}

interface Action2 {
  addedVideoId: string
  action: string
}

interface PlaylistEditEndpoint {
  playlistId: string
  actions: Action2[]
}

interface WebCommandMetadata9 {
  sendPost: boolean
  apiUrl: string
}

interface CommandMetadata9 {
  webCommandMetadata: WebCommandMetadata9
}

interface CreatePlaylistServiceEndpoint2 {
  videoIds: string[]
  params: string
}

interface OnCreateListCommand2 {
  clickTrackingParams: string
  commandMetadata: CommandMetadata9
  createPlaylistServiceEndpoint: CreatePlaylistServiceEndpoint2
}

interface AddToPlaylistCommand2 {
  openMiniplayer: boolean
  videoId: string
  listType: string
  onCreateListCommand: OnCreateListCommand2
  videoIds: string[]
}

interface Action3 {
  clickTrackingParams: string
  addToPlaylistCommand: AddToPlaylistCommand2
}

interface SignalServiceEndpoint2 {
  signal: string
  actions: Action3[]
}

interface UntoggledServiceEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata8
  playlistEditEndpoint: PlaylistEditEndpoint
  signalServiceEndpoint: SignalServiceEndpoint2
}

interface WebCommandMetadata10 {
  sendPost: boolean
  apiUrl: string
}

interface CommandMetadata10 {
  webCommandMetadata: WebCommandMetadata10
}

interface Action4 {
  action: string
  removedVideoId: string
}

interface PlaylistEditEndpoint2 {
  playlistId: string
  actions: Action4[]
}

interface ToggledServiceEndpoint {
  clickTrackingParams: string
  commandMetadata: CommandMetadata10
  playlistEditEndpoint: PlaylistEditEndpoint2
}

interface AccessibilityData8 {
  label: string
}

interface UntoggledAccessibility {
  accessibilityData: AccessibilityData8
}

interface AccessibilityData9 {
  label: string
}

interface ToggledAccessibility {
  accessibilityData: AccessibilityData9
}

interface ThumbnailOverlayToggleButtonRenderer {
  isToggled: boolean
  untoggledIcon: UntoggledIcon
  toggledIcon: ToggledIcon
  untoggledTooltip: string
  toggledTooltip: string
  untoggledServiceEndpoint: UntoggledServiceEndpoint
  toggledServiceEndpoint: ToggledServiceEndpoint
  untoggledAccessibility: UntoggledAccessibility
  toggledAccessibility: ToggledAccessibility
  trackingParams: string
}

interface Run6 {
  text: string
}

interface Text3 {
  runs: Run6[]
}

interface ThumbnailOverlayNowPlayingRenderer {
  text: Text3
}

interface ThumbnailOverlay {
  thumbnailOverlayTimeStatusRenderer: ThumbnailOverlayTimeStatusRenderer
  thumbnailOverlayToggleButtonRenderer: ThumbnailOverlayToggleButtonRenderer
  thumbnailOverlayNowPlayingRenderer: ThumbnailOverlayNowPlayingRenderer
}

interface Run7 {
  text: string
}

interface SnippetText {
  runs: Run7[]
}

interface Run8 {
  text: string
}

interface SnippetHoverText {
  runs: Run8[]
}

interface DetailedMetadataSnippet {
  snippetText: SnippetText
  snippetHoverText: SnippetHoverText
  maxOneLine: boolean
}

export default interface VideoResponseData {
  videoId: string
  thumbnail: Thumbnail
  title: Title
  longBylineText: LongBylineText
  publishedTimeText: PublishedTimeText
  lengthText: LengthText
  viewCountText: ViewCountText
  navigationEndpoint: NavigationEndpoint2
  ownerBadges: OwnerBadge[]
  ownerText: OwnerText
  shortBylineText: ShortBylineText
  trackingParams: string
  showActionMenu: boolean
  shortViewCountText: ShortViewCountText
  menu: Menu
  channelThumbnailSupportedRenderers: ChannelThumbnailSupportedRenderers
  thumbnailOverlays: ThumbnailOverlay[]
  detailedMetadataSnippets: DetailedMetadataSnippet[]
  searchVideoResultEntityKey: string
}

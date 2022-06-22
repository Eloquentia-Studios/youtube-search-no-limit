# YouTube Search No Limit

## Warnings!

Because of its reliance on the Youtube search page format, if Youtube were to release a new version that does not comform to the current formatting this package may break. Works as of 2022-06-22.

## Quick Start

### Installation

```sh
# Using npm
$ npm install youtube-search-no-limit

# Using yarn
$ yarn add youtube-search-no-limit

# Using pnpm
$ pnpm i youtube-search-no-limit
```

### Example Usage

```ts
import { search } from 'youtube-search-no-limit'
const videos = await search('Cat videos')

console.log(`Found ${videos.length} videos:`)
videos.forEach((video) => {
  console.log(`\t${video.title} by ${video.channel.name} with a duration of ${video.durationText}`)
})
```

## How it works

This package uses the normal Youtube search page instead of the API, thus circumventing the API limit. Therefore, this library can do more free searches than the 100 that you can do with the normal (free) API in a day.

## Supported Node.js Versions

Should work on any Node.js version that can use ESM modules (i.e. `type="module"` in `package.json`).

## License

Uses the MIT license.

See [LICENSE](https://github.com/Eloquentia-Studios/youtube-search-no-limit/blob/main/LICENSE)

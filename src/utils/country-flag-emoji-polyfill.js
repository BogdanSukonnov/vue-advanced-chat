import { isEmojiSupported } from '@/utils/is-emoji-supported'

function t(t2 = 'Twemoji Country Flags', e = 'https://cdn.jsdelivr.net/npm/country-flag-emoji-polyfill@0.1/dist/TwemojiCountryFlags.woff2') {
  if (isEmojiSupported('\u{1F60A}') && !isEmojiSupported('\u{1F1E8}\u{1F1ED}')) {
    const n = document.createElement('style')
    // eslint-disable-next-line no-return-assign,no-sequences
    return n.textContent = `@font-face {font-family: "${t2}"; unicode-range: U+1F1E6-1F1FF, U+1F3F4, U+E0062-E0063, U+E0065, U+E0067, U+E006C, U+E006E, U+E0073-E0074, U+E0077, U+E007F; src: url('${e}') format('woff2'); }`, document.head.appendChild(n), true
  }
  return false
}
export { t as polyfillCountryFlagEmojis }
export default null

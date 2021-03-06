const SPOTIFY_TOKEN = "spotify_token";
const YOUTUBE_TOKEN = "youtube_token";
const SPOTIFY_EXPIRE = "spotify_expire";

const tokens = {
  getSpotifyToken: () => localStorage.getItem(SPOTIFY_TOKEN),
  setSpotifyToken: token => localStorage.setItem(SPOTIFY_TOKEN, token),
  removeSpotifyToken: () => localStorage.removeItem(SPOTIFY_TOKEN),
  getSpotifyTokenExpire: () => localStorage.getItem(SPOTIFY_EXPIRE),
  setSpotifyTokenExpire: time => localStorage.setItem(SPOTIFY_EXPIRE, time),
  getYoutubeToken: () => localStorage.getItem(YOUTUBE_TOKEN),
  setYoutubeToken: token => localStorage.setItem(YOUTUBE_TOKEN, token),
  removeYoutubeToken: () => localStorage.removeItem(YOUTUBE_TOKEN)
};
export default tokens;

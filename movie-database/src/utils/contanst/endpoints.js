const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

const ENDPOINTS = {
    POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    NOWPLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
    TOPRATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    RECOMMENDATIONS: `${BASE_URL}`,
    DETAILMOVIE: ``,
    HERO: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
}

export {
    ENDPOINTS,
    BASE_URL,
    API_KEY,
} 
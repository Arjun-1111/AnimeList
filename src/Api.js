import {
  SEARCH_QUERY,
  SINGLE_DETAILS,
  HERO_IMG,
  CHARACTERS_STAFF,
  CHARACTER_PICTURES,
  PERSON_PICTURES,
  SINGLE_ANIME_RECOMMENDATIONS,
  SINGLE_ANIME_EPISODES,
  SEASON_REQUEST,
  UPCOMING_ANIME,
  UPCOMING_WEEK,
  UPCOMING_WEEK_DAY,
  TOP_ITEMS_AIRING,
  GENRE,
} from "./apiRoutes";

const API = {
  search: async (search) => {
    const apiQuery = `${SEARCH_QUERY}${search}`;
    return await (await fetch(apiQuery)).json();
  },

  single_details: async (id) => {
    const apiQuery = `${SINGLE_DETAILS}${id}`;
    return await (await fetch(apiQuery)).json();
  },

  hero_img: async (id) => {
    const apiQuery = `${HERO_IMG}${id}/pictures`;
    return await (await fetch(apiQuery)).json();
  },

  characters_staff: async (id) => {
    const apiQuery = `${CHARACTERS_STAFF}${id}/characters_staff`;
    return await (await fetch(apiQuery)).json();
  },

  character_pictures: async (id) => {
    const apiQuery = `${CHARACTER_PICTURES}${id}/pictures`;
    console.log(apiQuery);
    return await (await fetch(apiQuery)).json();
  },

  person_pictures: async (id) => {
    const apiQuery = `${PERSON_PICTURES}${id}/pictures`;
    console.log(apiQuery);
    return await (await fetch(apiQuery)).json();
  },

  recommendations: async (id) => {
    const apiQuery = `${SINGLE_ANIME_RECOMMENDATIONS}${id}/recommendations`;
    console.log(apiQuery);
    return await (await fetch(apiQuery)).json();
  },

  total_episodes: async (id) => {
    const apiQuery = `${SINGLE_ANIME_EPISODES}${id}/episodes`;
    console.log(apiQuery);
    return await (await fetch(apiQuery)).json();
  },

  season_request: async (year, season) => {
    const apiQuery = `${SEASON_REQUEST}${year}/${season}`;
    return await (await fetch(apiQuery)).json();
  },

  upcoming_anime: async () => {
    const apiQuery = `${UPCOMING_ANIME}`;
    return await (await fetch(apiQuery)).json();
  },

  upcoming_week: async () => {
    const apiQuery = `${UPCOMING_WEEK}`;
    console.log(apiQuery);
    return await (await fetch(apiQuery)).json();
  },

  upcoming_week_day: async (day) => {
    const apiQuery = `${UPCOMING_WEEK_DAY}${day}`;
    console.log(apiQuery);
    return await (await fetch(apiQuery)).json();
  },

  top_items_airing: async (pagecount, subtype = "airing") => {
    const apiQuery = `${TOP_ITEMS_AIRING}${pagecount}/${subtype}`;
    return await (await fetch(apiQuery)).json();
  },

  genre: (genreId, page = 1) => {
    const apiQuery = `${GENRE}${genreId}/${page}`;
    console.log(apiQuery);
  },
};

export default API;

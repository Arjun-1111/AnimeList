export const ROOT_URL = `https://api.jikan.moe/v3`;

// search the anime with Query
//  /search/anime?q=Fate/Zero
export const SEARCH_QUERY = `${ROOT_URL}/search/anime?q=`;

// A single anime with character and person details
// https://api.jikan.moe/v3/anime/20/
// https://api.jikan.moe/v3/anime/id/
export const SINGLE_DETAILS = `${ROOT_URL}/anime/`;

// A single anime with pictures
// https://api.jikan.moe/v3/anime/20/pictures
// https://api.jikan.moe/v3/anime/id/pictures/
export const HERO_IMG = `${ROOT_URL}/anime/`;

// A single anime with character and person details
// https://api.jikan.moe/v3/anime/20/characters_staff
// https://api.jikan.moe/v3/anime/id/characters_staff
export const CHARACTERS_STAFF = `${ROOT_URL}/anime/`;

// A single character object with all its details
// https://api.jikan.moe/v3/character/id/request
// https://api.jikan.moe/v3/character/1/pictures

export const CHARACTER_PICTURES = `${ROOT_URL}/character/`;

// A single person object with all its details
// https://api.jikan.moe/v3/person/id/request
// https://api.jikan.moe/v3/person/1/pictures
export const PERSON_PICTURES = `${ROOT_URL}/person/`;

// A single character object with all its recommendations
// https://api.jikan.moe/v3/anime/20/recommendations
export const SINGLE_ANIME_RECOMMENDATIONS = `${ROOT_URL}/anime/`;

// Episode list use page no if more than 100 episode;
// https://api.jikan.moe/v3/anime/ANIME_ID/episodes/page_no(if more than 100episode)
export const SINGLE_ANIME_EPISODES = `${ROOT_URL}/anime/`;

// Anime of the specified season
// season	[summer ,spring ,fall, winter]
// https://api.jikan.moe/v3/season/year/season;
export const SEASON_REQUEST = `${ROOT_URL}/season/`;

// Anime that have been announced for the upcoming seasons
// https://api.jikan.moe/v3/season/later;
export const UPCOMING_ANIME = `${ROOT_URL}/season/later`;

// Anime schedule of the week or specified dayNote: If you don't pass the day parameter, it'll return the schedule for all days of the week
// https://api.jikan.moe/v3/schedule/
export const UPCOMING_WEEK = `${ROOT_URL}/schedule`;

// Anime schedule of the week or specified dayNote: If you don't pass the day parameter, it'll return the schedule for all days of the week
// https://api.jikan.moe/v3/schedule/monday
export const UPCOMING_WEEK_DAY = `${ROOT_URL}/schedule/`;

// TopTop items on MyAnimeList
// subtype: {Anime: [airing, upcoming, tv ,movie, ova ,special]}
// type:	{anime, manga, people (v3+), characters}
// https://api.jikan.moe/v3/top/type/page/subtype

export const TOP_ITEMS_AIRING = `${ROOT_URL}/top/anime/`;

// export const TOP_SECOND_PAGE = `${ROOT_URL}/top/anime/2/airing`;

// export const TOP_THIRD_PAGE = `${ROOT_URL}/top/anime/3/airing`;

// Anime/Manga items of the genre
// https://api.jikan.moe/v3/genre/anime/1/1
// https://api.jikan.moe/v3/genre/type/genre_id/page

export const GENRE = `${ROOT_URL}/genre/anime/`;
// Action: 1
// Adventure: 2
// Cars: 3
// Comedy: 4
// Dementia: 5
// Demons: 6
// Mystery: 7
// Drama: 8
// Ecchi: 9
// Fantasy: 10
// Game: 11
// Hentai: 12
// Historical: 13
// Horror: 14
// Kids: 15
// Magic: 16
// Martial Arts: 17
// Mecha: 18
// Music: 19
// Parody: 20
// Samurai: 21
// Romance: 22
// School: 23
// Sci Fi: 24
// Shoujo Ai: 26
// Shounen: 27
// Shounen Ai: 28
// Space: 29
// Sports: 30
// Super Power: 31
// Vampire: 32
// Yaoi: 33
// Yuri: 34
// Harem: 35
// Slice Of Life: 36
// Supernatural: 37
// Military: 38
// Police: 39
// Psychological: 40
// Thriller: 41
// Seinen: 42
// Josei: 43

import shows from './data/shows';

// map()
// Get an array of all titles
const allTitles = shows.map((show) => show.title);
console.log(allTitles);

// Get an array of ids

const allID = shows.map((show) => show.id);
console.log(allID);

// Get an array of ratings

const allRating = shows.map((show) => show.ratingDetails.rating);
console.log(allRating);

// Get an array of ratings rounded to 2 decimal places
const allRatingRounded = shows.map((show) => show.ratingDetails.rating.toFixed(2));
console.log(allRatingRounded);

// Capitalise all genres
const capitaliseGenres = shows.map((show) => ({
  ...show, genres: show.genres.map((genre) => genre.toUpperCase()),
}));
console.log(capitaliseGenres);

// Double all ratingDetails.count
const doubleRatingCount = shows.map((show) => show.ratingDetails.count * 2);
console.log(doubleRatingCount);
// Round all ratings to 2 decimal places
const allRatingToTwoDecimal = shows.map((show) => ({
  ...show, ratingDetails: show.ratingDetails.rating.toFixed(2),
}));
console.log(allRatingToTwoDecimal);
// map() each object to only have id, title, description - šo es piemirsu, bet te vnk skip spread
const onlyIdTitleDescription = shows.map((show) => (
  {
    id: show.id,
    title: show.title,
    description: show.description,
  }
));
console.log(onlyIdTitleDescription);
// If id === 1, change rating to 9.9999
const ifChangeRating = shows.map((show) => (
  show.id === 1
    ? {
      ...show,
      ratingDetails: {
        ...show.ratingDetails,
        rating: 9.9999,
      },
    }
    : show
));
console.log(ifChangeRating);
// If id === 2, change rating to 8 and add + 1 to rating count
const ifAddPlusOne = shows.map((show) => (
  show.id === 2 ? {
    ...show,
    ratingDetails: {
      ...show.ratingDetails,
      rating: 8,
      count: show.ratingDetails.count + 1,
    },
  }
    : show
));
console.log(ifAddPlusOne);
// If rating > 7, change isPopular value to true
const ifToTrue = shows.map((show) => (
  show.ratingDetails.rating > 7 ? {
    ...show,
    isPopular: true,
  }
    : show

));
console.log(ifToTrue);
// If isPopular === true, change rating to 10
const ifTrueRatingTen = shows.map((show) => (
  show.isPopular === true ? {
    ...show,
    ratingDetails: {
      ...show.ratingDetails,
      rating: 10,
    },
  }
    : show

));
console.log(ifTrueRatingTen);
// If genres include 'Science-Fiction', change available to true
const scienceTrue = shows.map((show) => (
  show.genres.includes('Science-Fiction')
    ? {
      ...show,
      available: true,
    }
    : show
));
console.log(scienceTrue);
// If isPopular === true, map() episodes, to be an array of episode ids, else make episodes an empty []
const episodeIds = shows.map((show) => {
  if (show.isPopular === true) {
    return show.episodes.map((episode) => episode.id);
  }
  return {
    ...show,
    episodes: [],
  };
});
console.log(episodeIds);

// Get an array of all possible genres (not [['', ''], ['']] but ['', '', ''])
const getAllGenres = [...new Set(
  shows.flatMap((show) => (
    show.genres
  )),
)];
console.log(getAllGenres);
// If year > 2016 and isPopular === true, add 'Documentary' to genres
const addDocumentary = shows.map((show) => (
  (show.year > 2016 && show.isPopular === true)
    ? {
      ...show,
      genres: [...show.genres, 'Documentary'],
    }
    : show
));
console.log(addDocumentary);

// If id === 1 and episode id === 24, change episode releaseDate to '2022-10-12 00:00:00'
const releaseDate = shows.map((show) => (
  (show.id === 1 && show.episodes.map((episode) => episode.id === 24))
    ? { ...show, releaseDate: '2022-10-12 00:00:00' }
    : show
));
console.log(releaseDate);
//
// filter()
// Get all shows, where rating < 7
const ratingUnderSeven = shows.filter((show) => (
  show.ratingDetails.rating < 7

));

console.log(ratingUnderSeven);
// Get all shows, where description includes "DC"
const includesDC = shows.filter((show) => (
  show.description.includes('DC')

));
console.log(includesDC);
// Get all shows, where isPopular === true
const isPopularTrue = shows.filter((show) => (
  show.isPopular === true
));
console.log(isPopularTrue);

// Get all shows, where genres include Drama
const onlyDrama = shows.filter((show) => (
  show.genres.includes('Drama')

));
console.log(onlyDrama);
// Get all shows, where episode array length >= 2
const episodesArrayTwo = shows.filter((show) => (
  show.episodes.length >= 2

));
console.log(episodesArrayTwo);
// Get all shows, where episode title is Wendigo
const titleWendigo = shows.filter((show) => (
  show.episodes.map((episode) => episode.title).includes('Wendigo')
));
console.log(titleWendigo);
// Get all shows, where year is < 2019
const chickenNuggets = shows.filter((show) => (
  show.year < 2019
));
console.log(chickenNuggets);

// Get all shows, where title starts with Sup
const titleStartsWithSup = shows.filter((show) => (
  show.title.startsWith('Sup')
));
console.log(titleStartsWithSup);

//     Get all shows, where id === 2
const ID2 = shows.filter((show) => (
  show.id === 2
));
console.log(ID2);

// Get all shows, where id !== 2
const notID2 = shows.filter((show) => (
  show.id !== 2
));
console.log(notID2);
// Get all episodes, where genres include "Drama" and rating > 7
const highRatingDrama = shows.filter((show) => (
  show.genres.includes('Drama') && show.ratingDetails.rating > 7
));

console.log(highRatingDrama);

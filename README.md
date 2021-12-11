![Movie-Search](https://i.ibb.co/XxQMZBY/Screen-Shot-2021-12-06-at-10-16-11-PM.png)

# Quik Movie Search 🎥

## By. Yousof Wakili

## [**Live**](https://quikmoviesearch.surge.sh/) **|** [**Say Hi to me on LinkedIn!**](https://www.linkedin.com/in/youseffect/) **|** [**Portfolio**](https://youseffect.com/)

---

## Description🗒

---

#### Millions of movies, explore now using the TMDB database and retrieve information about your favorite cinema.

## Purpose of building this project 🤔

---

To build a movie app with Vanilla javascript using Asynchronous JavaScript (promises,async/await) and axios for API fetching.
Below is an example of said API call:

```
// HTTP (GET) req to api and log results from TMDB API

const searchResults = async (result) => {
  try {
    const res = await axios.get(
      `${DOMAIN}/search/movie?query=${result}&api_key=${API_KEY}&`
    )
    const resultsList = res.data.results
    createMovies(resultsList)
  } catch (err) {
    console.log('Error: msg of', err)
  }
}
```

Used Regex for date formatting, passing in the date below:

```
// format the date using regex :)
const formatDate = (input) => {
  let date = input.match(/\d+/g),
    year = date[0].substring(2),
    month = date[1],
    day = date[2]

  return month + '/' + day + '/' + year
}
```

Quik Movie Search utilizes the TMDB API (https://developers.themoviedb.org/3/getting-started/introduction) to display content about each movie you search through. Error handling/rejection of each promise are handled through try/catch blocks and passing in the error if any errors occur with the API call. Axios library: for API calling.

Bootstrap for small tasks such as creating a dark and regular mode, small font changes, and CSS for the rest of the transitions, responsiveness, font styling, etc.

Quik Movie Search is deployed through surge for static sites and easy deployment.

## Technologies 📟

---

- HTML
- CSS
- JavaScript
- Axios library for API calls
- Bootstrap for creating normal/dark mode, buttons

  ![Technologies](https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/153843217/original/4dd60989b231adcf1648273f970b8d3100e19264/create-a-website-using-html-css-javascript-and-bootstrap.png)

---

## Getting started

#### `npm install - installing dependencies`

#### `open index.html`

- Quick note: dark-mode-switch.min.js and dark-mode.css is following @coliff dark-mode-switch repo here: https://github.com/coliff/dark-mode-switch to create the dark mode theme.

## Screenshot

![screenshot](https://i.ibb.co/tX85gZN/Screen-Shot-2021-12-10-at-1-48-47-AM.png)

const API_KEY = '2a11d107c759ba35814d0d26b7229617'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

let searchInput = ''

// selecting search bar
const input = document.querySelector('#searchForm')
const wrapper = document.querySelector('#wrapper')

// Event Listener
input.addEventListener('submit', (e) => {
  e.preventDefault()
  searchInput = input.elements.query.value

  // passing in search query into movie results function
  searchResults(searchInput)

  // clearing search everytime new query is made
  if (wrapper.innerHTML != '') {
    wrapper.innerHTML = ''
  }
})

// get req to api and log results
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

// creating movies
const createMovies = (data) => {
  console.log(data)
  // checks if anything has return from search query
  data.length < 1 ? alert('No movies returned 😔 try again') : null

  // looping through the returned data and creating the content for page
  for (let i = 0; i < data.length; i++) {
    const title = data[i].title
    const overview = data[i].overview
    const imgSrc = data[i].poster_path
    const date = data[i].release_date

    // creating div and appending the above data
    const createDiv = document.createElement('div')
    createDiv.id = 'movieContainer'

    const movieData = {
      title: title,
      overview: overview,
      imgSrc: imgSrc,
      div: createDiv,
      date: date
    }
    createMovieData(movieData)

    // append to main wrapper
    wrapper.appendChild(createDiv)
  }
}

// Creating movie title, overview, and image.
const createMovieData = (data) => {
  createTitle(data.title, data.div)
  createImg(data.imgSrc, data.div)
  createOverview(data.overview, data.date, data.div)
}

// Title
const createTitle = (title, div) => {
  const h5 = document.createElement('h5')
  h5.innerHTML = title
  div.appendChild(h5)
}

// Overview
const createOverview = (description, date, div) => {
  // Creating description div container
  const descriptionDiv = document.createElement('div')
  descriptionDiv.id = 'descriptionContainer'

  if (description === '') {
    const h5 = document.createElement('h5')
    const p = document.createElement('p')
    p.innerHTML = `Description not available 😔`
    descriptionDiv.appendChild(h5)
    descriptionDiv.appendChild(p)
    div.appendChild(descriptionDiv)
  } else {
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const today = new Date()
    p1.innerHTML = `${description}`
    p2.innerHTML = `Release date: ${today.toLocaleDateString('en-US', date)}`

    // appending and adding to move container div
    descriptionDiv.appendChild(p1)
    descriptionDiv.appendChild(p2)
    div.appendChild(descriptionDiv)
  }
}

// Image
const createImg = (img, div) => {
  if (img === null) {
    const image = document.createElement('img')
    image.id = 'movieImage'
    image.classList.add('img-fluid')
    image.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/No_image_available_500_x_500.svg/1200px-No_image_available_500_x_500.svg.png`
    image.alt = 'Empty Image'
    div.appendChild(image)
  } else {
    const image = document.createElement('img')
    image.id = 'movieImage'
    image.classList.add('img-fluid')
    image.alt = 'Movie Image'
    image.src = `${IMAGE_BASE_PATH}/${img}`
    div.appendChild(image)
  }
}

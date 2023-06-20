/* eslint-disable quotes */

const adminDashboard = {
	id: crypto.randomUUID(),
	title: 'Admin Dashboard',
	code: 'https://github.com/jundran/admin-dashboard',
	live: 'https://jundran.github.io/admin-dashboard/',
	image: 'admin-dashboard.png',
	stack: 'HTML, CSS',
	tags: [],
	description: 'Admin Dashboard is a single page site built to a provided design using grid layout.'
}

const battleship = {
	id:crypto.randomUUID(),
	title: 'Battleship',
	code: 'https://github.com/jundran/battleship',
	live: 'https://jundran.github.io/battleship/',
	image: 'battleship.png',
	stack: 'HTML, CSS, JavaScript',
	tags: ['Game'],
	description: 'Classic Battleship game. Playable against the computer with music and sound efects. Unit tested using Jest. The computer algorithm makes logical decisions when deciding which square to attack on the board.'
}

const blogManager = {
	id: crypto.randomUUID(),
	title: 'Blog Manager',
	code: 'https://github.com/jundran/blog-manager',
	live: 'https://jundran.github.io/blog-manager',
	image: 'blog-manager.png',
	stack: 'React, Sass, Styled Components',
	tags: ['React', 'Server', 'Database', 'Authentication', 'API'],
	description: 'Blog Manager is a front end client for a <strong>three part project</strong> (along with the blog viewer and blog API) that allows writers to author and manage blogs. Blog authors can create an account to write, manage, edit blogs, and to view and delete comments left by readers. It uses JSON web tokens to login and authenticate users. It connects to the <a class="simple-link" href="https://github.com/jundran/blog-api" target="_blank" rel="noreferrer">Blog API</a>, which is a separate back end application that enforces authentication and permissions, verifying that HTTP requests to manage a blog come from the authenticated blog author.'
}

const blogViewer = {
	id: crypto.randomUUID(),
	title: 'Blog Viewer',
	code: 'https://github.com/jundran/blog-viewer',
	live: 'https://jundran.github.io/blog-viewer',
	image: 'blog-viewer.png',
	stack: 'HTML, CSS, JavaScript',
	tags: ['Database', 'Server', 'API'],
	description: 'Blog Viewer is the front end client for reading blogs created by authors using blog-manager. It allows the public to read and comment on published blogs. For simplicity users can read and leave comments without authentication or an account. The backend <a class="simple-link" href="https://github.com/jundran/blog-api" target="_blank" rel="noreferrer">API</a> ensures that only published blogs can be fetched by the client.'
}

const calculator = {
	id:crypto.randomUUID(),
	title: 'Calculator',
	code: 'https://github.com/jundran/calculator',
	live: 'https://jundran.github.io/calculator/',
	image: 'calculator.png',
	stack: 'HTML, CSS, JavaScript',
	tags: [],
	description: 'A calculator app with retro design.'
}

const cvApplication = {
	id:crypto.randomUUID(),
	title: 'CV Application',
	code: 'https://github.com/jundran/cv-application',
	live: 'https://jundran.github.io/cv-application/',
	image: 'cv-application.png',
	stack: 'React',
	tags: ['React'],
	description: 'CV creator application built with React. Users can fill out their resume then print a PDF file from the preview. Data is saved using local storage.'
}

const etchASketch = {
	id:crypto.randomUUID(),
	title: 'Etch-a-sketch',
	code: 'https://github.com/jundran/etch-a-sketch',
	live: 'https://jundran.github.io/etch-a-sketch/',
	image: 'etch-a-sketch.png',
	stack: 'HTML, CSS, JavaScript',
	tags: ['Game'],
	description: 'An Etch-a-sketch browser game that allows players to create a drawing board with a set number of squares. The player can shade squares with multiple passes or delete them to draw pictures.'
}

const imageSlider = {
	id:crypto.randomUUID(),
	title: 'Image Slider',
	code: 'https://github.com/jundran/image-slider',
	live: 'https://jundran.github.io/image-slider/',
	image: 'image-slider.png',
	stack: 'HTML, CSS, JavaScript',
	tags: [],
	description: 'A modular image slider with automatical scrolling or manual control.'
}

const inventoryApplication = {
	id: crypto.randomUUID(),
	title: 'Inventory',
	code: 'https://github.com/jundran/inventory-application',
	live: 'https://inventory-ml9n.onrender.com/',
	image: 'inventory-application.png',
	stack: 'PUG, SASS, JavaScript, Express, MongoDB',
	tags: ['Server', 'Database', 'Template Engine', 'API'],
	description: 'This is an inventory management application. It catalogues items available for sale in in a store along with stock counts, descriptions, prices etc. The user can view, create, edit and delete products and the categories that they belong to using the app. They can upload images and thumbnails using multer middleware. Data is persisted to a cloud hosted MongoDB database. PUG templates serve the front end views using Express. As this is a practice project it is using free tier hosting on render.com. A limitation of the  free tier is that it does not allow for persistent storage so images will not be saved across server restarts but, in the code, I have implemented functionality to save uploaded images and delete them from the database and from the file system. The initial data for this app is populated from the Dummy JSON API as it would be very time consuming and tedious to manual enter all this data myself. The app also makes use of MongoDB aggregation pipeline to generate dynamic statistics about the inventory which you can see on the homepage.'
}

const knightsTravails = {
	id:crypto.randomUUID(),
	title: 'Knights Travails',
	code: 'https://github.com/jundran/knights-travails',
	live: 'https://jundran.github.io/knights-travails/',
	image: 'knights-travails.png',
	stack: 'HTML, CSS, JavaScript',
	tags: ['Game'],
	description: 'This project provides a chess board with a knight piece. The player can move the knight to any other square on the board. It utilizes a breadth-first-search algorithm to find the shortest path.'
}

const landingPage = {
	id:crypto.randomUUID(),
	title: 'Landing Page',
	code: 'https://github.com/jundran/landing-page',
	live: 'https://jundran.github.io/landing-page/',
	image: 'landing-page.png',
	stack: 'HTML CSS',
	tags: [],
	description: "This is one  of my earliest projects. It's a simple landing page featuring Mario characters."
}

const library = {
	id:crypto.randomUUID(),
	title: 'Library',
	code: 'https://github.com/jundran/library',
	live: 'https://jundran.github.io/library/',
	image: 'library.png',
	stack: 'HTML, CSS, JavaScript',
	tags: [],
	description: 'A library application that allows users to add books that they own and manage their read status.'
}

const memoryCard = {
	id: crypto.randomUUID(),
	title: 'Memory Card',
	code: 'https://github.com/jundran/memory-card',
	live: 'https://jundran.github.io/memory-card/',
	image: 'memory-card.png',
	stack: 'React',
	tags: ['React', 'Game'],
	description: 'A memory card game written in React. The challenge is for the players to click each character card but only once. It tracks the players best score and provides feedback about the game when it is over.'
}

const miniMessageBoard = {
	id: crypto.randomUUID(),
	title: 'Mini Message Board',
	code: 'https://github.com/jundran/mini-message-board',
	live: 'https://mini-message-board-kgod.onrender.com',
	image: 'mini-message-board.png',
	stack: 'PUG, SASS, JavaScript, Express',
	tags: ['Server', 'Template Engine'],
	description: 'This a simple message board app created to practise what I have learned about Express so far. It serves PUG templates. The index route shows the message board. The user can fill out the form to post a new message to the "/new" route which will save the message to an array. The user is then redirected to the index page which fetches the updated array of messages. Messages are persisted as long as the server remains running and can be seen by all users. For a production ready app, a database would be needed to provide authorization and data persistence if the server goes offline but that is beyond the scope of this project.'
}

const movies = {
	id: crypto.randomUUID(),
	title: 'Movies',
	code: 'https://github.com/jundran/top-movies',
	live: 'https://jundran.github.io/top-movies/',
	image: 'top-movies.png',
	stack: 'React, SASS',
	tags: ['React', 'API'],
	description: 'This is a close clone of <a class="simple-link" href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">TMDB website</a> made with React. It uses real data from TMDB API. This app does not have a back end and not all the features of the original site have been implemented because of it is far too big, but the core purpose of the site is functional, which is to find movies and TV shows to watch and I use it personally. The home page loads trending movies and TV shows from the API. I built a toggle component to switch between media types or time frames. I created the modal video player which plays trailers from the home page or from individual media detail pages and, unlike the original site, background interaction and scrolling is disabled when the modal is open. I created a review score component to match the one on TMDB which works dynamically using the score returned by the API. I also implemented search functionality with a drop down search bar that queries the API. Furthermore, my site aims to use best practices for modular reusable components along with correct semantics for accessibility and screen readers.'
}

const odinRecipes = {
	id: crypto.randomUUID(),
	title: 'Odin Recipes',
	code: 'https://github.com/jundran/odin-recipes',
	live: 'https://jundran.github.io/odin-recipes/',
	image: 'odin-recipes.png',
	stack: 'HTML, CSS, JavaScript',
	tags: [],
	description: 'A simple recipe website. This is one of my earliest projects.'
}

const restaurantPage = {
	id: crypto.randomUUID(),
	title: 'Restaurant Page',
	code: 'https://github.com/jundran/restaurant-page',
	live: 'https://jundran.github.io/restaurant-page/',
	image: 'restaurant-page.png',
	stack: 'HTML, CSS, JavaScript',
	tags: [],
	description: 'A single page application for a restaurant which provides tabbed browsing. The purpose of this project was to learn how to make components using javaScript but doing it the hard way before learning React.'
}

const rockPaperScissors = {
	id: crypto.randomUUID(),
	title: 'Rock Paper Scissors',
	code: 'https://github.com/jundran/rock-paper-scissors',
	live: 'https://jundran.github.io/rock-paper-scissors/',
	image: 'rock-paper-scissors.png',
	stack: 'HTML, CSS, JavaScript',
	tags: ['Game'],
	description: 'Rock Paper Scissors game playable against the computer.'
}

const shoppingCart = {
	id: crypto.randomUUID(),
	title: 'Shopping Cart',
	code: 'https://github.com/jundran/shopping-cart',
	live: 'https://jundran.github.io/shopping-cart/',
	image: 'shopping-cart.png',
	stack: 'React',
	tags: ['React'],
	description: 'An e-commerce site written in React. Users can add items to a cart, change quantities or delete them. State is updated automatically and persisted across reloads.'
}

const signUpForm = {
	id: crypto.randomUUID(),
	title: 'Sign up Form',
	code: 'https://github.com/jundran/sign-up-form',
	live: 'https://jundran.github.io/sign-up-form/',
	image: 'sign-up-form.png',
	stack: 'HTML, CSS, JavaScript',
	tags: [],
	description: 'A simple sign up form that uses javaScript for validation and to provide feedback to the user as they fill it out.'
}

const ticTacToe = {
	id: crypto.randomUUID(),
	title: 'Tic Tac Toe',
	code: 'https://github.com/jundran/tic-tac-toe',
	live: 'https://jundran.github.io/tic-tac-toe/',
	image: 'tic-tac-toe.png',
	stack: 'HTML, CSS, JavaScript',
	tags: ['Game'],
	description: 'A Noughts and Crosses game playable against the computer or another player. The computer algorithm makes logical decisions to play defensively on each turn.'
}

const todoList = {
	id: crypto.randomUUID(),
	title: 'Todo List',
	code: 'https://github.com/jundran/todo-list',
	live: 'https://jundran.github.io/todo-list/',
	image: 'todo-list.png',
	stack: 'HTML CSS, JavaScript',
	tags: [],
	description: 'A Todo list application. It allows the user to create projects and add todos to each project. Each todo can be marked as ongoing or completed, renamed, deleted and edited. State is persisted using local storage.'
}

const weatherApp = {
	id: crypto.randomUUID(),
	title: 'Weather App',
	code: 'https://github.com/jundran/weather-app',
	live: 'https://jundran.github.io/weather-app/',
	image: 'weather-app.png',
	stack: 'HTML, CSS, Javascript, API',
	tags: ['API'],
	description: 'A weather app using real-time data from the OpenWeather API. It allows the user to search by city in any country. It provides the current weather and other information for that location such as coordinates and sunrise times. A simple toggle switch component allows the user to change between metric and imperial units.'
}

// const project = {
// 	id: crypto.randomUUID(),
// 	title: '',
// 	code: '',
// 	live: '',
// 	image: '',
// 	stack: '',
// 	tags: [],
// 	description: ''
// }


export const tags = ['React', 'Game', 'Database', 'Server', 'Template Engine', 'Authentication', 'API']

export const projects = [
	blogManager,
	blogViewer,
	inventoryApplication,
	miniMessageBoard,
	movies,
	shoppingCart,
	memoryCard,
	knightsTravails,
	cvApplication,
	battleship,
	ticTacToe,
	todoList,
	weatherApp,
	imageSlider,
	restaurantPage,
	library,
	calculator,
	adminDashboard,
	signUpForm,
	etchASketch,
	rockPaperScissors,
	odinRecipes,
	landingPage
]

const db = [
  {
    name: "The Rick and Morty API",
    info: `ShlaAPI!`,
    md: `${require('../markdown/rickmorty.md')}`,
    url: "http://rickandmortyapi.com",
    code: "https://github.com/afuh/rick-and-morty-api",
    image: `${require('../images/screenshots/rickmorty.jpeg')}`,
    thumb: `${require('../images/thumb/rickandmorty.jpeg')}`,
    tags: ["react", "gatsby", "node", "express", "mongodb", "mongoose", "api"],
    latest: true
  },
  {
    name: "React universal",
    info: `A mobile blog/instant messaging mock application.`,
    md: `${require('../markdown/universal.md')}`,
    url: "http://universal.axelfuhrmann.com",
    code: "https://github.com/afuh/universal",
    image: `${require('../images/screenshots/universal.png')}`,
    thumb: `${require('../images/thumb/universal.jpeg')}`,
    tags: ["react", "node", "express", "mongodb", "mongoose", "material ui"]
  },
  {
    name: "The Next Web Layout",
    info: `This is news magazine clone of the The Next Web's layout.

    I built it in React with the great and simple News api using different sources.`,
    md: `${require('../markdown/nextweb.md')}`,
    url: "http://next-web.surge.sh/",
    code: "https://github.com/afuh/next-web",
    image: `${require('../images/screenshots/nextweb.png')}`,
    thumb: `${require('../images/thumb/nextweb.jpeg')}`,
    tags: ["react", "the odin project", "news api", "api"]
  },
  {
    name: "Portfolio",
    info: `When I decided to built a Portfolio I first started writing the database, which is a large array of objects, where each object is the data of a particular project or app. To showcase them easily I decided to use React because of the reusability it offers and also because I wanted to built it with a tag system.

    I did the client side routing with React Router using the tags as parameters for the URLs.

    The info of each project is written in Markdown and save it in a separated .md file and converted on-the-fy by Render Markdown. This processes is extremely comfortable, I can write or edit the text in a separate file and reuse it anywhere I want.

    This way I can end up using this portfolio as an almost blog.`,
    md: `${require('../markdown/portfolio.md')}`,
    url: "https://axelfuhrmann.com",
    code: "https://github.com/afuh/afuh.github.io",
    image: `${require('../images/screenshots/portfolio.png')}`,
    thumb: `${require('../images/thumb/portfolio.jpeg')}`,
    tags: [ "react" ]
  },
  {
    name: "Pinstagram",
    info: `Pinstagram is a full stack Instagram clone. It's the result of exercising with Node, MongoDB and its frameworks.

    The goal was to build a functional clone of some Internet-based photo-sharing application.

    I finally decided to copy the web version of Instagram and add some extra features to it, such as the ability to upload images in the browser or to be able to see all the images that I liked in one place, such as the Pinterest boards.

    This is my first approach to the Back-end kingdom.`,
    md: `${require('../markdown/pinsta.md')}`,
    url: "http://pinstagram.axelfuhrmann.com",
    code: "https://github.com/afuh/pinstagram",
    image: `${require('../images/screenshots/pinsta.png')}`,
    thumb: `${require('../images/thumb/pinsta.jpeg')}`,
    video: [`${require('../images/videos/pinsta.webm')}`, `${require('../images/videos/pinsta.mp4')}`],
    tags: ["node", "javascript", "express", "mongodb", "mongoose", "pug", "passport"],
    latest: true
  },
  {
    name: "Where is the ISS right now?",
    info: `Know exactly where the International Space Station is and who is on board.

    For some time I wanted to do something simple that would tell me where the ISS is. I know there are plenty of places to look for that information, but considering that it's always a good time to continue exploring the Google API, I decided to build it myself.`,
    md: `${require('../markdown/iss.md')}`,
    url: "http://iss.axelfuhrmann.com/",
    code: "https://github.com/afuh/iss",
    image: `${require('../images/screenshots/iss.png')}`,
    thumb: `${require('../images/thumb/iss.jpeg')}`,
    gif: `${require('../images/gifs/iss.gif')}`,
    video: [`${require('../images/videos/iss.webm')}`, `${require('../images/videos/iss.mp4')}`],
    tags: ["javascript", "google maps", "api"],
    latest: true
  },
  {
    name: "Minimalist Image Slider",
    info: `A minimalist UI image slider.

    If the user does not interact with the Image Slider for a certain amount of time, the images will start to slide automatically until the user interact with it again. This way the user will never be bothered by the auto-slide.
    `,
    md: `${require('../markdown/slide.md')}`,
    url: "https://afuh.github.io/slider/",
    code: "https://github.com/afuh/slider",
    image: `${require('../images/screenshots/slide.png')}`,
    thumb: `${require('../images/thumb/slide.jpeg')}`,
    tags: ["javascript", "the odin project"]
  },
  {
    name: "Weather React",
    info: `Show the local weather.

    The user can search a location by city, country or ZIP code and access the current weather and a 5 days forecast.`,
    md: `${require('../markdown/weather.md')}`,
    url: "http://weather-react.surge.sh/",
    code: "https://github.com/afuh/weather",
    image: `${require('../images/screenshots/weather.png')}`,
    thumb: `${require('../images/thumb/weather.jpeg')}`,
    tags: ["react", "open weather map", "api", "free code camp"]
  },
  {
    name: "Step Sequencer",
    info: `A 16 Step Sequencer built with JQuery and Web Audio API.

    This was an interesting challenge. I started building it as soon as I started learning JavaScript and it was quite hard to making it work. I already updated it a couple of times because of the new things that I've learned, and I guess I will continue to do so in the future.`,
    md: `${require('../markdown/sequencer.md')}`,
    url: "https://afuh.github.io/sequencer/",
    code: "https://github.com/afuh/sequencer",
    image: `${require('../images/screenshots/sequencer.png')}`,
    thumb: `${require('../images/thumb/sequencer.jpeg')}`,
    tags: ["jquery", "web audio", "api"]
  },
  {
    name: "Snake Game",
    info: "This is the classic Snake game where the player controls a snake that grows longer with each piece of food it eats. The player loses if the snake gets so big it hits itself or if it goes off the board.",
    md: `${require('../markdown/snake.md')}`,
    url: "https://afuh.github.io/snake-game/",
    code: "https://github.com/afuh/snake-game",
    image: `${require('../images/screenshots/snake.png')}`,
    thumb: `${require('../images/thumb/snake.jpeg')}`,
    gif: `${require('../images/gifs/snake.gif')}`,
    video: [`${require('../images/videos/snake.webm')}`, `${require('../images/videos/snake.mp4')}`],
    tags: ["javascript", "p5.js", "the odin project"]
  },
  {
    name: "Calculator",
    info: `A simple JQuery calculator

    The main idea from the beginning was **not** to use eval() and do everything myself.
    This is a project as described in Free Code Camp and The Odin Project`,
    md: `${require('../markdown/calc.md')}`,
    url: "https://afuh.github.io/calculator/",
    code: "https://github.com/afuh/calculator",
    image: `${require('../images/screenshots/calc.png')}`,
    thumb: `${require('../images/thumb/calc.jpeg')}`,
    tags: ["jquery", "free code camp", "the odin project"]
  },
  {
    name: "Sketchpad",
    info: `A browser version of something between a Sketchpad and an Etch-A-Sketch.

    The user can edit the thickness of the grid to create drawings in more detail and change the stroke's color and shape.

    This is the first JavaScript project from the The Odin Project curriculum.`,
    md: `${require('../markdown/sketch.md')}`,
    url: "https://afuh.github.io/sketchpad/",
    code: "https://github.com/afuh/sketchpad",
    image: `${require('../images/screenshots/sketch.png')}`,
    thumb: `${require('../images/thumb/sketch.jpeg')}`,
    tags: ["jquery", "the odin project"]
  },
  {
    name: "Quote Machine",
    info: "I put together a bunch of ancient quotes of Diego Maradonain a .json file together with an array of outstanding personalities of history. Mixing them randomly gives pretty funny results.",
    md: `${require('../markdown/quote.md')}`,
    url: "https://afuh.github.io/frases/",
    code: "https://github.com/afuh/frases",
    image: `${require('../images/screenshots/quote.png')}`,
    thumb: `${require('../images/thumb/quote.jpeg')}`,
    tags: ["javascript", "free code camp"]
  },
  {
    name: "Now That's Delicious!",
    info: "A full stack restaurant application which users can search, geolocate, review and curate their favourite restaurants from around the world.",
    md: `${require('../markdown/delicious.md')}`,
    url: "https://delicious-app.herokuapp.com",
    code: "https://github.com/afuh/delicious",
    image: `${require('../images/screenshots/delicious.png')}`,
    thumb: `${require('../images/thumb/delicious.jpeg')}`,
    tags: ["node", "express", "mongodb", "mongoose", "pug", "passport", "javascript", "google maps", "api"]
  },
  {
    name: "FCC Back End API Projects",
    info: "This is a small page to showcase my solutions to the FreeCodeCamp API and microservices challenges.",
    md: `${require('../markdown/fccapi.md')}`,
    url: "https://fcc-backend.herokuapp.com/",
    code: "https://github.com/afuh/fcc-backend-projects",
    image: `${require('../images/screenshots/backend.png')}`,
    thumb: `${require('../images/thumb/backend.jpeg')}`,
    tags: ["node", "express", "mongodb", "mongoose", "pug", "api", "free code camp"]
  }
]

export default db
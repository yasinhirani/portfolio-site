import weather from '../src/assets/weather.PNG';
import black from '../src/assets/black.PNG';
import moviesearch from '../src/assets/movie.PNG'
import portfoliomain from '../src/assets/portfoliomain.PNG'
import recipesearch from '../src/assets/recipesearch.PNG'
import calculator from '../src/assets/calculator.PNG'

const Sdata = [
    {
        imgsrc: portfoliomain,
        title:"My Portfolio Site",
        content:"This is my portfolio site made in React.Js which describes me and contains details of all the projects made by me in the past few monts or years.",
        btnvisit:"Visit GitHub",
        btnlive:"Go Live",
    },
    {
        imgsrc: weather,
        title:"Weather App",
        content:"This site made in React.Js takes City as the input from user and displays the current weather of given city. It uses OpenWeather api to fetch the Temperature.",
        btnvisit:"Visit GitHub",
        linkgithub:"https://github.com/yasinhirani/weatherapp",
        btnlive:"Go Live",
    },
    {
        imgsrc: recipesearch,
        title:"Food Recipe Search",
        content:"This site made in React.Js takes Food item as the input from user and displays all the recipies related to that item. It uses Edamam api to fetch the Recipies.",
        btnvisit:"Visit GitHub",
        linkgithub:"https://github.com/yasinhirani/food-recipe-search",
        btnlive:"Go Live",
    },
    {
        imgsrc: moviesearch,
        title:"Movie Search",
        content:"This site made in React.Js takes Movie name as the input from user and displays the all the information realted to that Movie. It uses OMDB api to fetch the Movie details.",
        btnvisit:"Visit GitHub",
        linkgithub:"https://github.com/yasinhirani/movie_search",
        btnlive:"Go Live",
    },
    {
        imgsrc: calculator,
        title:"Calculator",
        content:"It is made in HTML,CSS and Javascript. It handles all the mathematical calculations for our daily needs and also contains the function to find out square root in just single click.",
        btnvisit:"Visit GitHub",
        linkgithub:"https://github.com/yasinhirani/calculator",
        btnlive:"Go Live",
    },
    {
        imgsrc: black,
        title:"Dark website",
        content:"I made this site at the initial stage when i stepped into learning web development using HTML and CSS. This was my first project after learning the basics of HTML and CSS.",
        btnvisit:"Visit GitHub",
        linkgithub:"https://github.com/yasinhirani/black-site",
        btnlive:"Go Live",
        linklive:"https://yasinhirani.github.io/black-site/",
    },
]
export default Sdata;
import weather from '../src/assets/weather.PNG';
import rock_paper_scissor from '../src/assets/rock_paper_scissor.PNG';
import moviesearch from '../src/assets/movie.PNG'
import portfoliomain from '../src/assets/portfoliomain.PNG'
import recipesearch from '../src/assets/recipesearch.PNG'
import todo from '../src/assets/todo.PNG'

const Sdata = [
    {
        imgsrc: portfoliomain,
        title:"My Portfolio Site",
        content:"This is my portfolio site made in React.Js which describes me and contains details of all the projects made by me in the past few months or years.",
        btnvisit:"Visit GitHub",
        linkgithub:"https://github.com/yasinhirani/portfolio-site",
        btnlive:"Go Live",
        linklive:"https://yasinhirani.github.io/portfolio-site/",
    },
    {
        imgsrc: weather,
        title:"Weather App",
        content:"This site made in React.Js takes City as the input from user and displays the current weather of given city. It uses OpenWeather api to fetch the Temperature.",
        btnvisit:"Visit GitHub",
        linkgithub:"https://github.com/yasinhirani/weatherapp",
        btnlive:"Go Live",
        linklive:"https://yasinhirani.github.io/weatherapp/",
    },
    {
        imgsrc: recipesearch,
        title:"Food Recipe Search",
        content:"This site made in React.Js takes Food item as the input from user and displays all the recipies related to that item. It uses Edamam api to fetch the Recipies.",
        btnvisit:"Visit GitHub",
        linkgithub:"https://github.com/yasinhirani/food-recipe-search",
        btnlive:"Go Live",
        linklive:"https://yasinhirani.github.io/food-recipe-search/",
    },
    {
        imgsrc: moviesearch,
        title:"Movie Search",
        content:"This site made in React.Js takes Movie name as the input from user and displays the all the information realted to that Movie. It uses OMDB api to fetch the Movie details.",
        btnvisit:"Visit GitHub",
        linkgithub:"https://github.com/yasinhirani/movie_search",
        btnlive:"Go Live",
        linklive:"https://yasinhirani.github.io/movie_search/",
    },
    {
        imgsrc: todo,
        title:"ToDo List",
        content:"A simple ToDo List app made in React.Js used to enter things for our daily need. User can store and delete todo's as per his/her needs. It uses the LocalStorage to store all the todo's.",
        btnvisit:"Visit GitHub",
        linkgithub:"https://github.com/yasinhirani/todolist",
        btnlive:"Go Live",
        linklive:"https://yasinhirani.github.io/todolist/",
    },
    {
        imgsrc: rock_paper_scissor,
        title:"Rock Paper Scissor",
        content:"This is Rock Paper Scissor game made in pure HTML,CSS and JAVACSRIPT. In this game the user can play against computer. If the user beats computer then he will get 1 point and vice-versa.",
        btnvisit:"Visit GitHub",
        linkgithub:"https://github.com/yasinhirani/rock_paper_scissor",
        btnlive:"Go Live",
        linklive:"https://yasinhirani.github.io/rock_paper_scissor/",
    },
]
export default Sdata;
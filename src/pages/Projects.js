import React from "react";
import Project from "../components/Project";
import Container from "../components/Container";

const projectList = [
    {
        title: "Not Another Movie DB",
        href: "https://chrscchrn.github.io/NotAnotherMovieDb/",
        about: "An app that lets the user select a series of filters to randomly select a suggested movie on whatever streaming services they may have. These filters include: Genre, Streaming Services these titles are on, release year, actors, and directors. The movie is randomly presented on a spinning wheel like its a game-show.",
        img: "../images/RandomMovieDatabase.PNG"
    },
    {
        title: "Brain Juice",
        href: "https://brainjuicing.herokuapp.com/",
        about: "Brain Juice is an application for students, those in creative fields, employees, writers, or anyone that may be experiencing burnout or mental fatigue to access a happy place for relaxation and revitalizing their minds.",
        img: "../images/BrainJuicing.PNG"
    },
    {
        title: "Nolan's Note Taker",
        href: "https://nolansnotes.herokuapp.com/",
        about: "A note taking application that allows the user to save and delete notes.",
        img: "../images/NoteTaker.PNG"
    },
    {
        title: "Employee Directory",
        href: "https://nolanbt.github.io/react-employee-directory/",
        about: "A react application that allows the user to keep track and search/sort through a list of employees",
        img: "../images/EmployeeDirectory.PNG"
    },
]

function Projects () {
    return(
        <Container className={"container w-100 mx-auto vw-100 vh-100"}>
            <div className="row">
                {projectList.map((obj) => <Project key={obj.title} title={obj.title} href={obj.href} about={obj.about} img={obj.img}/>)}
            </div>
        </Container>
    );
}

export default Projects;
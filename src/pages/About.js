import React from "react";
import Container from "../components/Container"

const styles = {
    header: {   
        color: "white",
        textShadow: "10px 10px 5px black"
    },
    bio: {
        color: "white",
        textAlign: "center"
    },
    jumbotron: {
        backgroundImage: "linear-gradient(to bottom right, red, blue)",
        boxShadow: "0px 0px 50px black"
    }
}

function About() {
    return (
        <Container className={"container w-75 mx-auto shadow-lg bg-transparent vw-100 vh-100 rounded"}>
            <div style={styles.jumbotron} className="jumbotron jumbotron-fluid rounded">
                <div className="container">
                    <h1 style={styles.header} className="display-4 text-center">Hello, I'm Nolan Terpstra!</h1>
                    <p style={styles.bio} className="lead">I am a full-stack web developer with an interest in practical problem solving and passion projects. Recently earned a certificate in full-stack development through Rice University, where I acquired technical skills in online collaboration while learning multiple coding languages/tools such as: HTML, CSS, Javascript, jQuery, mySql/mongoDB, and React. Throughout the length of the course, I worked with a team of other developers to create full-stack applications with mobile responsive layouts and offer an engaging user experience. I am looking forward to applying my newly developed skills to offer creative solutions and engaging user experiences.</p>
                </div>
            </div>
        </Container>
    );
}

export default About;
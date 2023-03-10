import React from "react";
import codingquiz from '../images/coding-quiz.png'
import comicbook from '../images/comic-book.png'
import datenite from '../images/date-nite.png'
import notetaker from '../images/note-taker.png'
import passwordgenerator from '../images/password-generator.png'
import quarterarcade from '../images/quarter-arcade.png'
import workday from '../images/workday.png'

function Project() {
    const projects = [
      {
        title: "coding quiz",
        imageUrl: codingquiz,
        app: "https://github.com/ZainKhawaja98/challenge-4-javascript-quiz",
        github: "https://zainkhawaja98.github.io/challenge-4-javascript-quiz/",
      },
      {
        title: "comic book",
        imageUrl: comicbook,
        app: "https://warm-bastion-22220.herokuapp.com/",
        github: "https://github.com/codingColinMcM/Comic-Book-E-Commerce",
      },
      {
        title: "date nite",
        imageUrl: datenite,
        app: "https://github.com/Dav3ster/Date_Nite",
        github: "https://dav3ster.github.io/Date_Nite/",
      },
      {
        title: "note taker",
        imageUrl: notetaker,
        app: "https://github.com/ZainKhawaja98/Challenge-11-Note-Taker",
        github: "https://zain-khawaja-note-taker.herokuapp.com/",
      },
      {
        title: "password generator",
        imageUrl: passwordgenerator,
        app: "https://github.com/ZainKhawaja98/challenge-3-password-generator",
        github: "https://zainkhawaja98.github.io/challenge-3-password-generator/",
      },
      {
        title: "quarter arcade",
        imageUrl: quarterarcade,
        app: "https://github.com/galegro2022/Arcade-",
        github: "https://quarterarcade.herokuapp.com/login-signup",
      },
      {
        title: "work day scheduler",
        imageUrl: workday,
        app: "https://github.com/ZainKhawaja98/challenge-5-APIs-zain-khawaja",
        github: "https://zainkhawaja98.github.io/challenge-5-APIs-zain-khawaja/",
      },

    ];
    return (
        <section>
          <div className="card-deck d-flex flex-row flex-wrap justify-content-center p-3">
            {projects.map((project) => (
              <div className="card m-2" key={project.title}>
                <img
                  src={project.imageUrl}
                  className="card-img"
                  alt="Application Screenshot"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                </div>
                <div className="card-footer d-flex justify-content-center align-items-center">
                  <a href={project.app} className="btn">
                    Application
                  </a>
                  <a href={project.github} className="btn">
                    Github
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Project;
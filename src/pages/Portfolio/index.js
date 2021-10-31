import react from "react";
import Project from "../../components/Project";

function Portfolio() {

    // create an array of Project objects

    const myProjects = [
        // {
        //     // <Project id={"coderefactorpic"} link={"https://walterlaw19.github.io/CodeRefactor/"} title={"CodeRefactor"}/>
        //     id: "coderefactorpic",
        //     link:,
        //     title:
        // }
    ]

    return (
        <>
            <section id="work" class="projects">
                <div class="section-h2">
                    <h2>My Work</h2>
                </div>

                <div class="website">

                    <div id="nptp" class="main-website">
                        <a href="https://miraj00.github.io/National-Park-Trip-Planner/" target="blank" >National Park Trip Planner </a>
                    </div>

                    <div id="dream-home" class="main-website">
                        <a href="https://sheltered-eyrie-12242.herokuapp.com/" target="blank" >Dream Home</a>
                    </div>


                    <div class="row-websites">
                        {/* <div id="coderefactorpic" class="rows">
                            <a href="https://walterlaw19.github.io/CodeRefactor/" target="blank" title="Refactor"> CodeRefactor</a>
                        </div> */}
                        <Project id={"coderefactorpic"} link={"https://walterlaw19.github.io/CodeRefactor/"} title={"CodeRefactor"}/>


                        {/* <div id="password-generator" class="rows">
                            <a href="https://walterlaw19.github.io/Password-generator/" target="blank" title="Password Generator">Password Generator</a>
                        </div> */}
                        <Project id={"password-generator"} link={"https://walterlaw19.github.io/Password-generator/"} title={"Password Generator"}/>
                    </div>


                    <div class="row-websites">
                        <div id="code-quiz" class="rows">
                            <a href="https://walterlaw19.github.io/code-quiz/" target="blank" title="Code Quiz">Code Quiz</a>
                        </div>


                        <div id="work-day-scheduler" class="rows">
                            <a href="https://walterlaw19.github.io/Work-Day-Scheduler/" target="blank" title="Work Day Scheduler">Work-Day-Scheduler</a>
                        </div>
                    </div>

                    <div class="row-websites">
                        <div id="weather-dashboard" class="rows">
                            <a href="https://walterlaw19.github.io/weather-dashboard/" target="blank" title="weather-dashboard">Weather Dashboard</a>
                        </div>


                        <div id="fathercubillas" class="rows">
                            <a href="">Family Socials</a>
                        </div>
                    </div>

                    <div class="row-websites">
                        <div id="waltersinging" class="rows">
                            <a href="">Voice Major</a>
                        </div>


                        <div id="fathercubillas" class="rows">
                            <a href="">Family Socials</a>
                        </div>
                    </div>

                    <div class="row-websites">
                        <div id="waltersinging" class="rows">
                            <a href="">Voice Major</a>
                        </div>


                        <div id="lucassoccer" class="rows">
                            <a href="">Soccer Coach</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Portfolio;
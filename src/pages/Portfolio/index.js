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
                    {/* <h2>My Work</h2> */}
                </div>

                <div class="website">

                    {/* <div id="nptp" class="main-website">
                        <a href="https://miraj00.github.io/National-Park-Trip-Planner/" target="blank" >Nationalll Park Trip Planner </a>
                    </div>

                    <div id="dream-home" class="main-website">
                        <a href="https://sheltered-eyrie-12242.herokuapp.com/" target="blank" >Dream Home</a>
                    </div>
                    <div>
                        weather
                    </div> */}


                    <div class="row-websites">
                        {/* <div id="coderefactorpic" class="rows">
                            <a href="https://walterlaw19.github.io/CodeRefactor/" target="blank" title="Refactor"> CodeRefactor</a>
                        </div> */}
                        <Project id={"nptp"} link={"https://miraj00.github.io/National-Park-Trip-Planner/"} title={"National-Park-Trip-Planner"} />


                        {/* <div id="password-generator" class="rows">
                            <a href="https://walterlaw19.github.io/Password-generator/" target="blank" title="Password Generator">Password Generator</a>
                        </div> */}
                        <Project id={"dream-home"} link={"https://sheltered-eyrie-12242.herokuapp.com/"} title={"Dream Home"} />
                    </div>


                    <div class="row-websites">

                        {/* <div id="code-quiz" class="rows">
                            <a href="https://walterlaw19.github.io/code-quiz/" target="blank" title="Code Quiz">Code Quiz</a>
                        </div> */}
                        <Project id={"budget-tracker"} link={"https://shrieking-crypt-06375.herokuapp.com/"} title={"budget-tracker"} />


                        {/* <div id="work-day-scheduler" class="rows">
                            <a href="https://walterlaw19.github.io/Work-Day-Scheduler/" target="blank" title="Work Day Scheduler">Work-Day-Scheduler</a>
                        </div> */}
                        <Project id={"tech-blog"} link={"https://walt-first-tech-blog.herokuapp.com/"} title={"tech-blog"} />


                    </div>

                    <div class="row-websites">
                        <Project id={"employee-tracker"} link={"https://shrieking-crypt-06375.herokuapp.com/"} title={"employee-tracker"} />

                        {/* <div id="weather-dashboard" class="rows">
                            <a href="https://walterlaw19.github.io/weather-dashboard/" target="blank" title="weather-dashboard">Weather Dashboard</a>
                        </div> */}
                        <Project id={"weather"} link={"https://walterlaw19.github.io/weather-dashboard/"} title={"weather"} />


                        {/* <div id="fathercubillas" class="rows">
                            <a href="https://shrieking-crypt-06375.herokuapp.com/" target="_blank" title="budget-tracker">Budget Tracker</a>
                        </div> */}
                    </div>

                </div>
            </section>
        </>
    )

}

export default Portfolio;
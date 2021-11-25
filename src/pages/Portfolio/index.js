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
        {
            id: "nptp",
            link: "https://miraj00.github.io/National-Park-Trip-Planner/",
            title: "National-Park-Trip-Planner"
        },
        {
            id: "dream-home",
            link: "https://sheltered-eyrie-12242.herokuapp.com/",
            title: "Dream Home"
        },
        {
            id: "nptp",
            link: "https://miraj00.github.io/National-Park-Trip-Planner/",
            title: "National-Park-Trip-Planner 1"
        },
        {
            id: "dream-home",
            link: "https://sheltered-eyrie-12242.herokuapp.com/",
            title: "Dream Home 1"
        },
        {
            id: "nptp",
            link: "https://miraj00.github.io/National-Park-Trip-Planner/",
            title: "National-Park-Trip-Planner 2"
        },
        {
            id: "dream-home",
            link: "https://sheltered-eyrie-12242.herokuapp.com/",
            title: "Dream Home 2"
        }
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

                    {/* {
                        myProjects.map((project, index) => {
                            const firstItem = project;
                            const secondItem = myProjects[index + myProjects.length/2]

                            if(index < myProjects.length/2) {
                                return (
                                    <>
                                        <div class="row-websites">
    
                                            <Project id={firstItem.id} link={firstItem.link} title={firstItem.title} />
    
                                            <Project id={secondItem.id} link={secondItem.link} title={secondItem.title} />
                                        </div>
                                    </>
                                )
                            } else {
                                return;
                            }
                        })
                    } */}



                    <div class="row-websites">

                        <Project id={"global-trade"} link={"https://still-eyrie-57534.herokuapp.com/"} title={"global-trade"} />

                        <Project id={"dream-home"} link={"https://sheltered-eyrie-12242.herokuapp.com/"} title={"Dream Home"} />
                    </div>


                    <div class="row-websites">
                        <Project id={"nptp"} link={"https://miraj00.github.io/National-Park-Trip-Planner/"} title={"National-Park-Trip-Planner"} />




                        <Project id={"tech-blog"} link={"https://walt-first-tech-blog.herokuapp.com/"} title={"tech-blog"} />


                    </div>

                    <div class="row-websites">

                        <Project id={"budget-tracker"} link={"https://shrieking-crypt-06375.herokuapp.com/"} title={"budget-tracker"} />

                        <Project id={"employee-tracker"} link={"https://shrieking-crypt-06375.herokuapp.com/"} title={"employee-tracker"} />





                    </div>




                </div>
            </section>
        </>
    )

}

export default Portfolio;
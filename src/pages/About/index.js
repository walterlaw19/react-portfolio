import react from "react";
import myImage from '../../assets/img/IMG_5587.jpeg'

function About() {

    return (
        <>
            <section class="subtitle">
                <div class="walter-driving">
                    <img src={myImage} alt="walter driving" />
                </div>
                <div class="cool-subtitle">
                    <h2>"I have NOT failed, <br />
                        I've just found 10,000 ways <br />
                        That it won't work" <br /> <br />
                        Thomas A. Edison</h2>
                </div>
            </section>



            <section id="about-me" class="know-me">
                <div class="section-h2">
                    <h2>About Me</h2>
                </div>
                <p>I am a Full stack Web App Developer graduate from Rutgers Bootcamp. <br />
                    I have complete knowledge in HTML, CSS & Javascript. <br />
                    I will also gain skills in Node.js, OOP, Express.js & SQL among others. <br />
                    I have the will to excel at this career as I am a hard-worker and always eager to master new abilities<br />
                    Other skills I have acquired during my career include legal assitance and Office Manager<br />
                    During my free time, I like coaching soccer to my litle cousin and practice my vocal skills while performing at church <br/>
                    and spend quality time with family.
                </p>
            </section>
        </>
    )

}

export default About;
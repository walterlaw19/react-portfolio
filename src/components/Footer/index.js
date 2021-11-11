import react from "react";

const display = {
    marginTop: "15%",
    justifyContent: "space-evenly",
    display: "flex",

}

const social = {

    socialContact: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/walter-gonzales-6171901a2/",
            Icons: "https://img.icons8.com/color/50/000000/linkedin.png",
        },
        {
            name: "Github",
            url: "https://github.com/walterlaw19",
            Icons: "https://img.icons8.com/color/50/000000/github--v3.png",
        },
        {
            name: "instagram",
            url: "https://www.instagram.com/walterlaw19/",
            Icons: "https://icons8.com/icon/Xy10Jcu1L2Su/instagram",
        },

    ],

}


{/* <a href="https://icons8.com/icon/Xy10Jcu1L2Su/instagram">Instagram icon by Icons8</a> */}

function Footer() {

    return (
        <footer >

            <section >
                <div style={display}>
                    {social.socialContact.map((item) => {
                        return (
                            <span key={item.name}>
                                <a href={item.url} target="_blank">

                                    <a
                                        // alt="Remy Sharp"

                                        href={item.Icons}

                                        // sx={{ width: 56, height: 56 }}
                                    ></a>
                                    {item.name}
                                </a>
                            </span>
                        );
                    })}

                </div>



            </section>





            {/* 

            <section id="contact-me" class="my-info">
                <div class="section-h2">
                    <h2>Contact Me</h2>
                </div>

                <div class="contacts">
                    <div>
                        My Phone <br /> 908.463.8083
                    </div>

                    <div>
                        MY E-mail <br /> walterlaw19@gmail.com
                    </div>

                    <div>
                        Find me on <br /> <a href="https://www.linkedin.com/in/walter-gonzales-6171901a2" target="blank" >LinkedIn</a>
                    </div>

                    <div>
                        Find me on Instagram: <br /> <a href="https://www.instagram.com/walterlaw19/" target="_blank"> walterlaw19 </a>
                    </div>
                </div>
            </section> */}

            <div>

                Created by WG 2021 💻 💻 💻


            </div>






        </footer>
    )










}

export default Footer;
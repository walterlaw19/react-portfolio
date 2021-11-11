import react, { useState } from "react";
import { validateEmail } from "../../utils/helpers"

function Contact() {


    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    return (

<section>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    );



    //     <section id="contact-me" class="my-info">
    //         <div class="section-h2">
    //             <h2>Contact Me</h2>
    //         </div>

    //         <div class="contacts">
    //             <div>
    //                 My Phone <br /> 908.463.8083
    //             </div>

    //             <div>
    //                 MY E-mail <br /> walterlaw19@gmail.com
    //             </div>

    //             <div>
    //                 Find me on <br /> <a href="https://www.linkedin.com/in/walter-gonzales-6171901a2" target="blank" >LinkedIn</a>
    //             </div>

    //             <div>
    //                 Find me on Instagram: <br /> Walterlaw19
    //             </div>
    //         </div>
    //     </section>
    // )
}

export default Contact;
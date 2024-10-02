/*
File name: contact.jsx
Student name: Lucas Fraser
Student ID: 300725181
Date: Oct 1, 2024
*/

import selfpic from '../src/assets/selfpicture.jpg'
import '../src/contact.css'

export default function Contact() {
    return (
        <>
        <div class="wrapper">
            <h1>Contact page</h1>
            <div class="box">
                <div class="pic">
                    <img src={selfpic} alt="mondly languages" width="100" height="100"></img>
                </div>
                <div class="txt">
                    <h3>Lucas Fraser</h3>
                    <ul>
                        <li>phone: 613-485-6549</li>
                        <li>email: lfrase15@my.centennialcollege.ca</li>
                    </ul>
                </div>
            </div>
            <div>
                <form action="mailto:lfrase15@my.centennialcollege.ca" method="post">
                    <main>
                        <label for="fName">First Name:
                            <input type="text" name="fName" id="fName" />
                        </label>

                        <label for="lName">Last Name:
                            <input type="text" name="lName" id="lName" />
                        </label>

                        <label for="email">E-mail:
                            <input type="text" name="email" id="email" />
                        </label>

                        <label for="remarks">Comments:
                            <textarea name="remarks" id="remarks" rows="3" cols="22"></textarea>
                        </label>

                        <input type="submit" value="Submit" />
                    </main>
                </form>
            </div>
        </div>
        </>
    );
}
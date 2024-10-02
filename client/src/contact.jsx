import selfpic from '../src/assets/selfpicture.jpg'

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
        </div>
        </>
    );
}
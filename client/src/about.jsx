import selfpic from '../src/assets/selfpicture.jpg'
import '../src/about.css'

export default function About(){
    return (
        <>
        <div class="wrapper">
            <div class="box">
                <div class="pic">
                    <img src={selfpic} alt="self portrait"></img>
                </div>
                <div class="txt">
                    Lucas Fraser
                </div>
            </div>
            <h1>About Me Page</h1>            
            <p>Student of Web Application Development</p>
            <p>at Centennial College</p>
            <p>for Software Engineering - Artificial Intelligence</p>
        </div>
        </>
    );
}
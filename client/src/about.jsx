import selfpic from '../src/assets/selfpicture.jpg'
import '../src/about.css'

export default function About(){
    return (
        <>
        <h1>About Me Page</h1> 
        <div class="wrapper">
            <div class="box">
                <div class="pic">
                    <img src={selfpic} alt="self portrait"></img>
                </div>
                <div class="txt">
                    <h3>Lucas Fraser</h3>
                    <p>Student at Centennial College</p>
                    <p>Software Engineering Technology - Artificial Intelligence</p>
                    <p>class: Web Application Development - COMP229</p>
                </div>
            </div>   

        </div>
        </>
    );
}
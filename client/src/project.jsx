import mondly from '../src/assets/mondlylogo.png'
import synergy from '../src/assets/synergy_banner.png'
import astropad from '../src/assets/astropad.png'
import '../src/project.css'

export default function Project(){
    return (
        <>
        <div class="wrapper">
            <h1>Projects page</h1>
            <p>*I did not develop these applications.*</p>
            <p>These are highlightable programs that are indicative for me wanting to develop software.</p>
            <p>These bear the closest resemblance to ideas I've had for software I want to build. </p>
            <div class="box">
                <div class="pic">
                    <img src={mondly} alt="mondly languages" width="100" height="100"></img>
                </div>
                <div class="txt">
                    <h3>Project 1: Mondly by Pearson</h3>
                    <ul>
                        <li>educational app for learning langauges.</li>
                        <li>can be used as regular app on mobil device and web.</li>
                        <li>AR capabilities with mobil devices </li>
                        <li>VR capabilities with meta quest vr headsets.</li>
                    </ul>
                </div>
            </div>   
            <div class="box">
                <div class="pic">
                    <img src={synergy} alt="symless synergy" width="100" height="100"></img>
                </div>
                <div class="txt">
                    <h3>Project 2: Symless - Synergy</h3>
                    <ul>
                        <li>connecting multiple computers.</li>
                        <li>use one mouse and keyboard across several computers.</li>
                        <li>copy and paste between systems.</li>
                        <li>Can't share computing resources.</li>
                    </ul>
                </div>
            </div> 
            <div class="box">
                <div class="pic">
                    <img src={astropad} alt="symless synergy" width="100" height="100"></img>
                </div>
                <div class="txt">
                    <h3>Project 3: Astropad - Project Blue</h3>
                    <ul>
                        <li>use Ipad as drawing tablet.</li>
                        <li>uses Ipad as a spare monitor.</li>
                    </ul>
                </div>
            </div> 
        </div>
        </>
    );
}
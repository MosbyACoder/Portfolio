/*
File name: services.jsx
Student name: Lucas Fraser
Student ID: 300725181
Date: Oct 1, 2024
*/

import webdesign from '../src/assets/webdesigning.png'
import appdesign from '../src/assets/csharp.jpg'
import '../src/services.css'
export default function Services(){
    return (
        <>
        <div class="wrapper">
            <h1>Services Page</h1>
            <p>Services I can provide include</p>
            <div class="box">
                <div class="pic">
                    <img src={webdesign} alt="mondly languages" width="100" height="100"></img>
                </div>
                <div class="txt">
                    <h3>Web Designer</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
            </div>
            <div class="box">
                <div class="pic">
                    <img src={appdesign} alt="mondly languages" width="100" height="100"></img>
                </div>
                <div class="txt">
                    <h3>Software Designer</h3>
                    <ul>
                        <li>C#</li>
                        <li>SQL</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
} 
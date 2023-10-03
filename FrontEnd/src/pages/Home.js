import React from "react";
import DefaultLayout from "../components/DefaultLayout";

import '.././resources/Home.css'
import { Link } from 'react-router-dom';
function Home() {

    return (

        <>

            <DefaultLayout>
                <div className="hero-section">
                    <div className="hero-content">
                        <h1>Build Your</h1>
                        <h2>Professional Resume</h2>
                        <p>Create stunning resumes with our easy-to-use builder</p>
                        <Link to='/profile'>
                            <button>Get Started</button>
                        </Link>
                    </div>
                    <div className="hero-image">
                        <img src={"https://play-lh.googleusercontent.com/L1-b09NFFFleqN3JoZ3TSeU0noGIx-7ylYUm2hQ9ePiLvx74axg5yes8tnvm63M9LkQ"} alt="Hero" />
                    </div>
                </div>
            </DefaultLayout>

        </>
    );
}

export default Home
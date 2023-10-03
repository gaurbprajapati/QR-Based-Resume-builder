import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import templateimg from "../pages/templates/template1.png";
import template2img from "../pages/templates/template2.png";
import "../resources/templates.css";
import { useNavigate } from "react-router-dom";
const Templateshome = () => {

    const navigate = useNavigate();
    const templates = [
        {
            title: "Simple Resume",
            image: templateimg,
        },
        {
            title: "Highlighted Sections Resume",
            image: template2img,
        },
    ];
    return (
        <>

            <DefaultLayout>

                <div className="row home" >
                    {/* <HeroSection /> */}

                    {templates.map((template, index) => {
                        return (
                            <div className="col-md-4  " style={{ marginLeft: '120px' }}>
                                <div className="template" >
                                    <img
                                        src={template.image}
                                        height="500"
                                        alt=""
                                        width='100%'
                                        style={{ textAlign: 'center' }}
                                    />
                                    <div className="text" style={{ marginLeft: '20px' }}>
                                        <p>{template.title}</p>
                                        <button onClick={() => navigate(`/templates/${index + 1}`)}>
                                            TRY
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </DefaultLayout >
        </>

    )
}

export default Templateshome
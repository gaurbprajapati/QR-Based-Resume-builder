import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import DefaultLayout from "../../components/DefaultLayout";
import Template1 from "./Template1";
import Template2 from "./Template2";
import Template3 from "./Template3";
import { Button } from "antd";
function Templates() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const params = useParams();
    const navigate = useNavigate()
    const gettemplate = () => {
        switch (params.id) {
            case "1": {
                return <Template1 />;
            }
            case "2": {
                return <Template2 />;
            }
            case "3": {
                return <Template3 />;
            }
        }
    };


    const func = (index) => {
        alert(`http://localhost:3000/templates/${index + 1}`)
    }
    return (
        <DefaultLayout>
            <div className="d-flex justify-content-end my-5 mx-5">
                <Button className="back-btn" onClick={() => navigate('/home')}>Back</Button>
                <Button className="mx-5" onClick={handlePrint}>Print</Button>
                <Button className="back-btn" onClick={func} >QR CODE</Button>
            </div>
            <div ref={componentRef}>{gettemplate()}</div>
        </DefaultLayout>
    );
}

export default Templates;

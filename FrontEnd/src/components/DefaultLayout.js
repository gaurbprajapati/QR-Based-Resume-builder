import React from 'react';
import './../resources/defaultlayout.css'
// import { Button, Menu } from "antd";
import { useNavigate, Link } from 'react-router-dom';
// import { UserOutlined } from "@ant-design/icons";
function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('sheyresume-user'))
    const navigate = useNavigate();
    // const menu = (

    // );
    return (
        <div className='layout'>
            <div className='header'>
                <h1 onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>Resume Builder</h1>


                <div style={{ marginLeft: '900px', color: "white", border: 'none' }} >
                    <Link to='/home'><h1>Home</h1></Link>
                </div>
                <div style={{ marginleft: '90px' }}>
                    <Link to='/profile'>
                        <h1>Profile</h1>
                    </Link>
                </div>

                <div style={{ marginleft: '90px' }}>
                    <Link to='/home'>
                        <h1>Templates</h1>
                    </Link>
                </div>
                <div onClick={() => {
                    localStorage.removeItem("sheyresume-user");
                    navigate("/login");
                }} name='Primary' > <Link><h1>Logout</h1></Link></div>
            </div>



            {/* <div className='content'>
                {props.children}
            </div> */}

            {/* <div className="content" style={{ overflow: 'scroll' }}>{props.children}</div> */}
            <div className="content" >{props.children}</div>


        </div >
    )

    function newFunction() {
        return <div className="btn-group">
            <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action
            </button>
            <div class="dropdown-menu">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
            </div>
        </div>
    }
}

export default DefaultLayout
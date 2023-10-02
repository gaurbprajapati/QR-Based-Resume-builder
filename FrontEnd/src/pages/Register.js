import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Spin } from 'antd';
import '../resources/authentication.css'
// import { Link } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';
function Register() {
    const [loading, setLoading] = useState(false);
    const Navigate = useNavigate();
    const onfinish = async (values) => {
        setLoading(true);
        try {
            await axios.post("api/user/register", values);
            setLoading(false);
            message.success("Registration successfull");
        } catch (error) {
            setLoading(false);
            message.error("Registration failed");
        }
    };



    // this is used because if anyone is allready register than user directly neviage to home page without regiter or login 
    useEffect(() => {
        if (localStorage.getItem('sheyresume-user')) {
            Navigate('/home')
        }
    })




    return (

        <div className="auth-parent">
            {loading && (<Spin size='large' />)}

            <h1 style={{ marginRight: '90px', color: 'white', fontSize: '300%' }} >REGISTER TO TECH <br /> TONIC</h1>

            <Form layout='vertical' onFinish={onfinish}>
                <h1>REGISTER</h1>
                <hr />
                <Form.Item name='username' label='Username'  >
                    <Input />
                </Form.Item>
                <br />
                <Form.Item name='password' label='Password'  >
                    <Input type='password' />
                </Form.Item>
                <br />
                <Form.Item name='cpassword' label='Confirm Password'  >
                    <Input type='password' />
                </Form.Item>
                <br />
                <div className="d-fles align-items-center justify-content-between" >
                    <Link to='/login'>
                        <Button style={{ color: "white" }}>

                            Click Here to Login
                        </Button>
                    </Link>
                    <Button onClick={() => Navigate("/home")} style={{ color: 'white', marginLeft: '50px' }} name='Primary' htmlType='submit'>
                        REGISTER
                    </Button>
                </div>

                {/* <Button type='primary' htmlType='submit'>
                    Register
                </Button> */}
            </Form>

        </div>
    )
}

export default Register
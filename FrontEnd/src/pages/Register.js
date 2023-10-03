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

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        try {
            if (!passwordRegex.test(values.password)) {
                setLoading(false);
                return message.error("Password must have at least 8 characters, including one uppercase letter, one lowercase letter, one special character, and one number.");
            }

            const response = await axios.post("api/user/register/", values);
            setLoading(false);
            message.success(response.data.message); // Display success message
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.data && error.response.data.error) {
                message.error(error.response.data.error); // Display the error message from the API response
            } else {
                message.error("Registration failed"); // If there's no specific error message from the API, display a generic one
            }
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

            <h1 style={{ marginRight: '90px', color: 'black', fontSize: '300%' }} >REGISTER TO TECH GROW UP</h1>

            <Form layout='vertical' onFinish={onfinish}>
                <h1>REGISTER</h1>
                <hr />
                <Form.Item name='username' label='Username' rules={[{ required: true, message: 'UserName is require' }]}   >
                    <Input />
                </Form.Item>
                <br />
                <Form.Item name='password' label='Password' rules={[{ required: true, message: 'Password require' }]} >
                    <Input type='password' />
                </Form.Item>
                <br />
                <Form.Item name='cpassword' label='Confirm Password' rules={[
                    { required: true, message: 'Please confirm your password' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('Passwords do not match');
                        },
                    }),
                ]}>
                    <Input type='password' />
                </Form.Item>
                <br />
                <div className="d-fles align-items-center justify-content-between" >
                    <Link to='/login'>
                        <Button style={{ color: "white" }}>

                            Click Here to Login
                        </Button>
                    </Link>
                    <Button style={{ color: 'white', marginLeft: '50px' }} name='Primary' htmlType='submit'>
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
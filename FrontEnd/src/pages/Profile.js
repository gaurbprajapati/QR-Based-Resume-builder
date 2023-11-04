import React, { useState } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Tabs, Form, Button, Spin, message } from 'antd'
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import axios from 'axios';



function Profile() {
    const [loading, setLoading] = useState(false);
    const user = JSON.parse(localStorage.getItem("sheyresume-user"));
    const onfinish = async (values) => {
        setLoading(true);
        try {
            const result = await axios.post("api/user/update/", { ...values, _id: user._id });

            //this will update data if any user already register and updated and want to edit the profile 
            //result.data update the updated data in local storage to mongo
            localStorage.setItem('sheyresume-user', JSON.stringify(result.data))
            setLoading(false);
            message.success("Profile Updated Successfull");
        } catch (error) {
            setLoading(false);
            message.error("Update failed");
        }
    };

    return (
        <>
            <DefaultLayout>
                {loading && <Spin size='large' />}
                <div className="update-profile">
                    <h4><b>Update Profile</b></h4>
                    <hr />
                    <Form layout="vertical" onFinish={onfinish} initialValues={user}>
                        <Tabs defaultActiveKey="1">
                            <Tabs.TabPane tab="Personal Info" key="1">
                                <PersonalInfo />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Skills and Education" key="2">
                                <SkillsEducation />
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="Experience / Projects" key="3">
                                <ExperienceProjects />
                            </Tabs.TabPane>
                        </Tabs>

                        <Button htmlType="submit">UPDATE</Button>
                    </Form>
                </div>
            </DefaultLayout>



            {/* <div className="container">
                    <h2>Update Profile </h2>
                    <Form layout='vertical' onfinish={(values) => console.log(values)}>
                        <ul className="nav nav-tabs">
                            <li className="active"><a data-toggle="tab" href="#home">Personal Info</a></li>
                            <li><a data-toggle="tab" href="#menu1">Skill and Education</a></li>
                            <li><a data-toggle="tab" href="#menu3">Experience and Projects</a></li>
                        </ul>


                        <div className="tab-content">
                            <div id="home" className="tab-pane fade in active">
                                <PersonalInfo />
                            </div>
                            <div id="menu1" className="tab-pane fade">
                                <h3>Skill and Education </h3>
                                <SkillsEducation />
                            </div>

                            <div id="menu3" className="tab-pane fade">
                                <h3>Experience and Projects</h3>
                                <ExperienceProjects />
                            </div>
                        </div>

                        <Button htmlType='submit' style={{ marginTop: '30px' }}>
                            UPDATE
                        </Button>

                    </Form>

                </div> */}

            {/* </DefaultLayout> */}
        </>
    )
}

export default Profile


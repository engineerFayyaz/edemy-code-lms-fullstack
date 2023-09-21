import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ApplyAsInstructor = () => {
    return (
        <div className="apply-instructor-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="apply-instructor-image">
                            <h2>Apply As Instructor</h2>
                            <img src="/images/apply-instructor.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="apply-instructor-content">
                            <Tabs>
                                <TabList>
                                    <Tab>Become an Instructor</Tab>
                                    <Tab>Instructor Rules</Tab>
                                    <Tab>Start with Courses</Tab>
                                </TabList>
                            
                                <TabPanel>
                                    <h3>Beauty Awareness</h3>
                                    <p>As a beauty educator at Toxic Beauty Academy, you will be responsible for delivering high-quality beauty education to our students..</p>
                                    <p>You will create and implement engaging lesson plans that cover a range of beauty topics, ensuring that students gain practical skills and industry knowledge..</p>
                                    <h3>Certification</h3>
                                    <p>LA passion for the beauty industry and a desire to inspire and educate others..</p>
                                </TabPanel>

                                <TabPanel>
                                    <h3>Body Sculpting</h3>

                                    <p>Our Body Sculpting course covers a wide range of techniques, including body contouring, cellulite reduction, fat reduction, and skin tightening. You'll learn the latest non-invasive and minimally invasive methods to sculpt the body effectively..</p>
 
                                    <p>Our experienced instructors are industry experts who have mastered the art of body sculpting. They will provide you with hands-on training, personalized guidance.</p>
 
                                    <h3>Certification</h3>
                                    <p>Toxic Beauty Academy is equipped with state-of-the-art devices and tools used in the body sculpting industry.</p>
                                </TabPanel>

                                <TabPanel>
                                    <h3>Lashes</h3>
                                    <p>Lash Extension Techniques: Learn a variety of lash extension techniques, including classic, volume, hybrid, and mega volume lashes. Master the art of creating customized lash looks to suit every client's unique style.</p>
                                    <p>Adhesive Mastery: Gain in-depth knowledge of lash adhesives, ensuring safe and long-lasting lash applications. Understand the science behind adhesives and how to select the right one for each client.</p>
                                    <h3>Certification</h3>
                                    <p>Upon successful completion of our Lash Artistry course, you'll receive a prestigious Toxic Beauty Academy certification, showcasing your expertise in lash extensions.</p>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyAsInstructor;
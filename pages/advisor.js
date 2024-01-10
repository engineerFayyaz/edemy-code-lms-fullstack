import React, { useEffect, useState } from 'react';
import PageBanner from '../components/Common/PageBanner';
import PremiumAccessTwo from '../components/Common/PremiumAccessTwo';
import Link from 'next/link';
import axios from 'axios';

const Advisor = () => {
    const [advisors, setAdvisors] = useState([]); // Initialize with an empty array

    useEffect(() => {
        axios.get('/api/teachers') // Replace '/api/advisors' with the actual API endpoint
            .then((response) => {
                setAdvisors(response.data.advisors || []); // Ensure advisors is an array
            })
            .catch((error) => {
                console.error('Error fetching advisor data:', error);
            });
    }, []);

    return (
        <>
            <PageBanner 
                pageTitle="Advisor" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Advisor" 
            />  

            <div className="advisor-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        {advisors.length > 0 ? (
                            advisors.map((advisor) => (
                                <div className="col-lg-4 col-sm-6 col-md-6" key={advisor.id}>
                                    <div className="single-advisor-item">
                                        <div className="advisor-image">
                                            <img src={advisor.imageUrl} alt="image" />

                                            <ul className="social-link">
                                                <li><a href={advisor.facebook} className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                                <li><a href={advisor.twitter} className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                                <li><a href={advisor.instagram} className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                                <li><a href={advisor.linkedin} className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                            </ul>
                                        </div>

                                        <div className="advisor-content">
                                            <h3>
                                                <Link href="#">
                                                    <a>{advisor.name}</a>
                                                </Link>
                                            </h3>
                                            <span>{advisor.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No advisors available.</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="pb-100">
                <PremiumAccessTwo />
            </div>
        </>
    );
}

export default Advisor;

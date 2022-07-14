import React from 'react';
import './index.css';
import { Title} from '../../utils/global-constants';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <section className="landing-child">
                <Link to='/home' className="title">
                    <span>{Title}</span>
                </Link>
            </section>
        </div>
    );
};

export default LandingPage;
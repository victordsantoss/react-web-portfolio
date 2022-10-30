import React, { useEffect } from 'react';
import './index.css';
import { Title } from '../../utils/global-constants';
import { Link } from 'react-router-dom';

const LandingPage = () => {

    useEffect(() => {
        const newPageTitle = 'Landing | <victordsantoss />';
        document.title = newPageTitle;
    }, []);

};

export default LandingPage;
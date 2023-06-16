import React, { useState, useEffect,Fragment } from 'react';
import NavComponent from './nav';
import AboutContent from './content/aboutContent';

const AboutPage = () => {
    return(
        <Fragment>
            <NavComponent />
            <AboutContent />
        </Fragment>
    )
}

export default AboutPage;
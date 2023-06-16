import React, { useState, useEffect,Fragment } from 'react';
import NavComponent from './nav';
import HomeContent from './content/homeContent';

const HomePage = () => {
    return(
        <Fragment>
            <NavComponent />
            <HomeContent />
        </Fragment>
    )
}

export default HomePage;
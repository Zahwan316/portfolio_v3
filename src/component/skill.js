import React, { useState, useEffect,Fragment } from 'react';
import NavComponent from './nav';
import SkillContent from './content/skillContent';

const SkillPage = () => {
    return(
        <Fragment>
            <NavComponent />
            <SkillContent />
        </Fragment>
    )
}

export default SkillPage;
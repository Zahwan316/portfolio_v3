import React, { useState, useEffect, Fragment } from 'react';
import NavComponent from './nav';
import ProjectContent from './content/projectContainer';
import SkillContent from './content/skillContent';

const ProjectPage = () => {
    return(
        <Fragment>
            <NavComponent />
            <ProjectContent />
        </Fragment>
    )
}

export default ProjectPage;
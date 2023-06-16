import React, { useState, useEffect, Fragment } from 'react';
import NavComponent from './nav';
import ContactContent from './content/contactContent';

const ContactPage = () => {
    return(
        <Fragment>
            <NavComponent />
            <ContactContent />
        </Fragment>
    )
}

export default ContactPage;
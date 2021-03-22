import React, { useEffect, useState } from 'react';
import classes from './EmailContainerHeader.module.css';

import { connect } from 'react-redux';

function EmailContainerHeader(props) { 

    return(
        <header className={classes.EmailContainerHeader}>
            <h2>EmailHeader</h2>
        </header>)
}

export default EmailContainerHeader;